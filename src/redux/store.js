import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

 // 第二个参数为thunk中间件 用来处理函数类型的action
 export default store = createStore()