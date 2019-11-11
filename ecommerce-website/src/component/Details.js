import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Navbar';
export default class Details extends Component {

    render(){
        return(
            <ProductConsumer>
                {(value)=> {
                    const {id, title, img, price, company, info, inCart} = value.detailProduct;
                    return(
                        <div className="container py=5">
                            {/*title*/}
                               <div className="row">
                                   <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                       <h2>{title}</h2>
                                   </div>
                               </div>
                            {/* end tite*/}
                            {/* product info*/}
                            <div className = "row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h5>made by: <span className="text-uppercase">{company}</span></h5>
                                    <h5 ><strong>price: <span>$</span>{price}</strong></h5>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Some information about the product:</p> 
                                    <p className="text-muted">{info}</p>
                                    <Link to="/"><ButtonContainer>Back to product</ButtonContainer></Link> <span/>
                                    <ButtonContainer cr="cart" disabled={inCart?true:false} onClick={()=>{value.addToCart(id); value.openModal(id)}}>{inCart?"in Cart":"add to Cart"}</ButtonContainer>                                                                
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
} 