import axios from 'axios'
import BaseApiServices from './BaseApiServices'
import Cookies from 'js-cookie'

const getAccessToken = () => {
  return Cookies.get('accessToken')
}

const getData = (url, params, onSuccess, onFailed, onFinish) => {
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  }

  axios
    .get(url, {
      params: params,
      headers: headers,
    })
    .then((response) => {
      return BaseApiServices.handleSuccess(
        response,
        onSuccess,
        onFailed,
        onFinish
      )
    })
    .catch((error) => {
      return BaseApiServices.handleError(error, onSuccess, onFailed, onFinish)
    })
}

const postData = (url, data, onSuccess, onFailed, onFinish) => {
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  }

  axios
    .post(url, data, {
      headers: headers,
    })
    .then((response) => {
      return BaseApiServices.handleSuccess(
        response,
        onSuccess,
        onFailed,
        onFinish
      )
    })
    .catch((error) => {
      return BaseApiServices.handleError(error, onSuccess, onFailed, onFinish)
    })
}

const putData = (url, data, onSuccess, onFailed, onFinish) => {
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  }

  axios
    .post(url, data, {
      headers: headers,
    })
    .then((response) => {
      return BaseApiServices.handleSuccess(
        response,
        onSuccess,
        onFailed,
        onFinish
      )
    })
    .catch((error) => {
      return BaseApiServices.handleError(error, onSuccess, onFailed, onFinish)
    })
}

export const login = async (data) => {
  const url = `${process.env.BASE_URL}/v1/login`

  const res = await axios
    .post(url, data)
    .then((response) => response.data)
    .catch((err) => err.response.data)

  return res
}
