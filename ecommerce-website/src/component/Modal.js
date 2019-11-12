import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Navbar';

export default class Modal extends Component{
    render(){
        return(
            <ProductConsumer>
                {(value) =>{
                    const {ModalOpen , closeModal} = value; //yaha value k andar hai modalOpen & closeModal
                    const {title, img,  inCart, price} = value.modalProduct; // title , img, price waigarah modalProduct ka part hain

                    if (!ModalOpen){
                        return null;
                    }
                    else{
                        return(
                         <ModalContainer>
                           <div className="container">
                               <div className="row">
                                   <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4">
                                       <h5>Item added to the cart</h5>
                                       <img src={img} className="img-fluid" alt="product"/>
                                       <h5>{title}</h5>
                                       <h5 className="text-muted">price: ${price}</h5>
                                       <Link to="/"><ButtonContainer /*onClick={console.log(closeModal())}*/>Continue Shopping</ButtonContainer></Link> <span/>
                                       <Link to="/cart"><ButtonContainer  cr="cart" /* onClick={()=>closeModal()}*/>Go To Cart</ButtonContainer></Link>
                                   </div>
                               </div>
                           </div>
                          </ModalContainer>  
                        );
                        
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
   position: fixed;
   top:0;
   bottom:0;
   right:0;
   left:0;
   background:rgba(0,0,0,0.3);
   display: flex;
   justify-content: center;
   align-items:center;
   #modal{
       background: white;
       border-radius: 5px;
   }
`