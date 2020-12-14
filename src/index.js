import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Helmet} from "react-helmet";
ReactDOM.render(
  <React.StrictMode>
      <Helmet>
          <link rel="stylesheet" href="./assets/css/open-iconic-bootstrap.min.css"/>
          <link rel="stylesheet" href="./assets/css/animate.css"/>

          <link rel="stylesheet" href="./assets/css/owl.carousel.min.css"/>
          <link rel="stylesheet" href="./assets/css/owl.theme.default.min.css"/>
          <link rel="stylesheet" href="./assets/css/magnific-popup.css"/>

          <link rel="stylesheet" href="./assets/css/aos.css"/>

          <link rel="stylesheet" href="./assets/css/ionicons.min.css"/>

          <link rel="stylesheet" href="./assets/css/flaticon.css"/>
          <link rel="stylesheet" href="./assets/css/icomoon.css"/>
          <link rel="stylesheet" href="./assets/css/style.css"/>
      </Helmet>
      <App />
      <Helmet>
          <script type="text/javascript" src="./assets/js/jquery.min.js" />
          <script type="text/javascript" src="./assets/js/jquery-migrate-3.0.1.min.js"/>
          <script type="text/javascript" src="./assets/js/popper.min.js"/>
          <script type="text/javascript" src="./assets/js/bootstrap.min.js"/>
          <script type="text/javascript" src="./assets/js/jquery.easing.1.3.js"/>
          <script type="text/javascript" src="./assets/js/jquery.waypoints.min.js"/>
          <script type="text/javascript" src="./assets/js/jquery.stellar.min.js"/>
          <script type="text/javascript" src="./assets/js/owl.carousel.min.js"/>
          <script type="text/javascript" src="./assets/js/jquery.magnific-popup.min.js"/>
          <script type="text/javascript" src="./assets/js/aos.js"/>
          <script type="text/javascript" src="./assets/js/jquery.animateNumber.min.js"/>
          <script type="text/javascript" src="./assets/js/scrollax.min.js"/>
          <script type="text/javascript" src="./assets/js/main.js"/>
      </Helmet>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
