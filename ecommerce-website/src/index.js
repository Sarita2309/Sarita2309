import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from './context';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

ReactDOM.render(
                <ProductProvider>
                  <Router>
                     <App/>
                  </Router>
                </ProductProvider>               
                , document.getElementById('root'))