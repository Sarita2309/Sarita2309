import React, { Component } from 'react';
import CartCoulmn from './CartColumn';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';

export default class Cart extends Component{

    render(){
        return(
            <section>
                <ProductConsumer>
                    {(value)=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                  <h1 className="col-10 mx-auto text-center text-slanted text-blue my-5"> Your Cart </h1>
                                  <CartCoulmn/>
                                  <CartList value={value}/>
                              </React.Fragment>
                            )
                        }
                        else{
                            return <EmptyCart/>;
                        }
                    }}
                </ProductConsumer>
            </section>
           
        )
    }
}