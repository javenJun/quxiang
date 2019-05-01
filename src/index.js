import React from 'react';
import ReactDom from 'react-dom'; // react 的 dom
import { AppContainer } from 'react-hot-loader'; // react 的热更新
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
 // 让所有容器组件都可以访问store，而不必显示地传递它。只需要在渲染根组件时使用即可。
 // react 单页面的的路由dom
import store from './redux/store'; 
import AxiosHandle from './tools/request';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();
function renderWithHotReload(Element){
    ReactDom.render(
        <AppContainer>
					<Provider store={store}>
						<Router>
							<Element />
						</Router>
					</Provider>
        </AppContainer>,
        document.getElementById('root')
      );
    }

// 初始化
renderWithHotReload(App);

// 热更新
if (module.hot) {
	module.hot.accept('./App', () => {
			const NextApp = require('./App').default;
			renderWithHotReload(NextApp);
	});
}

AxiosHandle.axiosConfigInit();