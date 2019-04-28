import axios from 'axios';

export default class Request {
    static axiosConfigInit() {
        if (process.env.NODE_ENV !== 'production') {
          axios.defaults.baseURL = 'http://localhost:7001'; //配置后端请求的问题
        }
      }

    //静态方法处理 axios 的请求问题
    static async axios(method='get',url,params){
        const handleMethod = method === 'get' && params ? { params } : params; //头部
        try {
            const res = await axios[method](url, handleMethod);
            const response = typeof res.data === 'object' ? res.data : JSON.parse(res.data);
            return response;
        } catch (error) {
            if(error.response){
                return error.response.data
            }
            return error;
        }
    }
}