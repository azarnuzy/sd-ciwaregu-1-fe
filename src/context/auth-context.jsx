import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState()
  const router = useRouter()
  const [previousPath, setPreviousPath] = useState('/')

  useEffect(() => {
    const storedToken = Cookies.get('token')
    const storedUserId = Cookies.get('user_id')
    if (storedToken && storedUserId) {
      setToken(storedToken)
      setUserId(storedUserId)
    }
  }, [])

  const login = async (data) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/login`

    const res = await axios
      .post(url, data)
      .then((response) => {
        console.log(response)
        if (response.data.code === 200) {
          const { authentication_token, userId } = response.data.data
          setToken(authentication_token)
          setUserId(userId)
          Cookies.set('token', authentication_token, {
            expires: 1,
          })
          Cookies.set('user_id', userId, { expires: 1 })
        }

        return response
      })
      .catch((err) => {
        console.log(err)
        return err
      })

    return res.data
    // return res
    //   // return res
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const logout = () => {
    // console.log('logout')
    setToken(null)
    setUserId(null)
    Cookies.remove('token')
    Cookies.remove('user_id')
    router.push('/')
  }

  const isAuthenticated = async () => {
    return !!token
  }

  const authValue = {
    token,
    login,
    logout,
    isAuthenticated,
    token,
    setToken,
    userId,
    setUserId,
    previousPath,
    setPreviousPath,
  }

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  )
}
