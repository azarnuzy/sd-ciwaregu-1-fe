import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import axios from 'axios'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState()
  const router = useRouter()

  useEffect(() => {
    const storedToken = Cookies.get('token')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const login = async (data) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/login`

      const res = await axios
        .post(url, data)
        .then((response) => response.data)
        .catch((err) => err.response.data)

      const { authentication_token, userId } = res.data
      //   console.log(res)
      setToken(authentication_token)
      setUserId(userId)
      Cookies.set('token', authentication_token)
      Cookies.set('user_id', userId)

      return res.data
      // return res
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    setToken(null)
    Cookies.remove('token')
  }

  const isAuthenticated = () => {
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
  }

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  )
}
