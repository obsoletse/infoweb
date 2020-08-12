import axios from 'axios'
/*axios默认全局配置*/
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const myAxios = axios.create({
  baseURL:'/info', //点击登录：http:localhost:9999/info
  timeout:20000,
})

/*/!*添加请求拦截*!/
myAxios.interceptors.request.use(config => {
  if(store.state.token){
    config.headers.common['Authorization'] = store.state.token //设置请求头带token
  }
  return config
},err => {
  Message.error({message: '请求超时!'});
  return Promise.resolve(err);
})*/


const requests = {
  /*data和params的差别是。data后台要用requestBody接收的json串,params是用requestParam接收*/
  //get请求
  getAction(url,params){
    return myAxios({
      url:url,
      method:'get',
      params:params
    })
  },
  //post请求
  postAction(url,params){
    return myAxios({
      url:url,
      method: 'post',
      data:params
    })
  },
  //put请求
  putAction(url,params){
    return myAxios({
      url:url,
      method:'put',
      data:params
    })
  },
  //delete请求
  deleteAction(url,params){
    return myAxios({
      url:url,
      method:'delete',
      params:params,
    })
  },
  //http请求
  httpAction(url,method,params){
    return myAxios({
      url: url,
      method:method,
      params: params
    })
  }
}

export default requests
