import axios from 'axios'
import BaseApiServices from './BaseApiServices'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: process.env.BASE_URL,
})

const getAccessToken = () => {
  return Cookies.get('accessToken')
}

const getData = (url, params, onSuccess, onFailed, onFinish) => {
  const headers = {
    Authorization: `Bearer ${getAccessToken()}`,
  }

  instance
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

  instance
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

  instance
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
