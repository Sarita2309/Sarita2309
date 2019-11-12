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
                    const {id}= value;
                     return  value.products.map((item) => {
                       return (
                         <div>
                         <Product key={item.id} prdct={item} value={value} /*onHandleDetail={value.product}*/ />   
                         </div>                       
                       )                  
                     });
                   }}
               </ProductConsumer>
              </div>
             
             
             
            </React.Fragment>         
        )
    }
}


    

export default ProductList;