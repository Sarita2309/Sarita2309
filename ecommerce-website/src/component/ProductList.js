import React, { Component } from 'react';
import Product from './Product';

import {ProductConsumer} from '../context';


class ProductList extends Component{
    render(){

        return( 
            <React.Fragment>
             <h1 className="col-10 mx-auto text-center text-slanted text-blue my-5">OUR PRODUCTS</h1>
             <div className="container">
             
               <ProductConsumer>   
                  {(value)=>{
                     return value.products.map((item) => {
                       return <Product key={item.id} prdct={item}  openModal={item.openModal}/>                     
                     });
                   }}
               </ProductConsumer>
              </div>
             
             
             
            </React.Fragment>         
        )
    }
}


    

export default ProductList;