import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { Provider } from 'react-redux'; // 让所有容器组件都可以访问store，而不必显示地传递它。只需要在渲染根组件时使用即可。
import { BrowserRouter as Router } from 'react-router-dom';
import AxiosHandle from './tools/request';
import * as serviceWorker from './serviceWorker';

function renderWithHotReload(Element){
    ReactDom.render(
        <AppContainer>
          <Provider>
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