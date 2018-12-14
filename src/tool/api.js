import Axios from 'axios'

const axios = Axios.create({
  baseURL: '/api/v1'
})

// export default axios
export default {
  install: function (Vue, options) {
    Object.defineProperty(Vue.prototype, '$api', { value: axios })
  }
}
