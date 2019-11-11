import React, { Component } from 'react';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Default';
import {Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './component/Modal';

export default class App extends Component {
    render(){
      return (
        <React.Fragment>
        <Navbar/>
          <Switch>
            <Route exact path="/" component = {ProductList} ></Route>
            <Route path="/Details" component={Details} ></Route>
            <Route path="/Cart" component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
          <Modal/>
        </React.Fragment>
          
      )
    }
}


                 
