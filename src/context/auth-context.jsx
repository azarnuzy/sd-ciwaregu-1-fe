import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getData } from '@/lib/ApiServices'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState()
  // const router = useRouter()

  useEffect(() => {
    const storedToken = Cookies.get('token')
    const storedUserId = Cookies.get('user_id')
    // console.log(Cookies.get('user_id'))
    if (storedToken && storedUserId) {
      setToken(storedToken)
      setUserId(storedUserId)
    }
  }, [])

  const login = async (data) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/login`

      const res = await axios
        .post(url, data)
        .then((response) => {
          // console.log(response)
          const { authentication_token, userId } = response.data.data
          setToken(authentication_token)
          setUserId(userId)
          Cookies.set('token', authentication_token, {
            expires: 1,
          })
          Cookies.set('user_id', userId, { expires: 1 })
          return response.data
        })
        .catch((err) => err.response.data)

      return res
      // return res
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    console.log('logout')
    setToken(null)
    setUserId(null)
    Cookies.remove('token')
    Cookies.remove('user_id')
  }

  const isAuthenticated = async () => {
    // console.log(userId)
    const getUser = await getData(
      `v1/profile/${userId}`,
      {},
      (data) => {
        console.log(data)
      },
      (message, error) => {},
      () => {}
    )
    return getUser
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
  }

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  )
}
