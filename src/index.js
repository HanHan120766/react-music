import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.scss';
import './scss/Reset.scss';
import './scss/Theme.scss';
import './scss/font/iconfont.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

(function (doc, win) {
  var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function () {
              var clientWidth = docEl.clientWidth;
              if (clientWidth>=750) {
                  clientWidth = 750;
              };
              if (!clientWidth) return;
              docEl.style.fontSize = (clientWidth / 750 * 100) + 'px';
          };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
