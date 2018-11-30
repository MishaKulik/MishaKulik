import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
  <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

  <Card picture ="https://tpc.googlesyndication.com/daca_images/simgad/8101718886777309864" text="Чёрная пятница! 28-30 ноября скидки до 70%! Не пропустите"position="left"/>
  <Card picture ="http://avatars.mds.yandex.net/get-yabs_performance/218725/2a000001660658527f55ef930828f80e667a/big"text="Новый ноутбут! Рассрочка 3 месяца! Скидка 15%!"position="right"/>
  </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
