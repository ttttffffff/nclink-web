import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS

// Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount("#app")

// axios 配置
axios.defaults.timeout = 20000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest=data=>JSON.stringify(data)
// axios.defaults.baseURL = '/backend'

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    let rsp
    if (error.response) {
      // 有回包，但响应码不是2XX
      rsp = error.response;
      console.log('status-------'+rsp.status)
    }else if(error.request){
      // 没有回包
      rsp = {
        request: error.request,
        data: {
            Code: 500,
            Msg:  "服务器无响应"
        }
      }
    }else {
      // 设置Request时出错
      rsp = {
          data: {
              Code: 501,
              Msg:  "请求失败"
          }
      }
    }
    return Promise.reject(rsp)
  }
)

export default axios
Vue.prototype.$http = axios
