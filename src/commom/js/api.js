import axios from 'axios'

export function get (url) {
  return function () {
    return axios.get(url)
      .then((res) =>{
        const data = res.data
        return data
      })
  }
}
