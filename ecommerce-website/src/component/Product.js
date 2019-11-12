import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';



export default class Product extends Component{
    render(){ 
        const { id, title, img, price, company, info, inCart } = this.props.prdct;
        const { handleDetail,openModal} = this.props.value;
        
        return(
        <div>
         
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">              
                <div className="card">
                  {/* we have added Product Consumer so that we can use function defined in the value of context.js*/}
                  <button onClick={()=>console.log(id)}>id</button>
                    <div className="img-container p-5" onClick={()=>handleDetail(id)}>
                    {/*onClick={()=>console.log("click card")If we donot write an arrow fn thn wenever 
                       click on Product or on icon, it will click 8 times but no response wen click on image*/ }
                      <Link to="/details">
                        <img src={img} /* HERE IMAGES are IN PUBLIC FOLDER WITH NAMED IMG */alt="product" className="card-img-top"/> 
                      </Link>
                      <button onClick={() => openModal(id)} className="cart-btn"/*when item is already added in cart, nothing will happen i.e. btn will be disabled
                      but wen item isnot in the cart, this btn will be active
                      */ disabled={inCart?true:false} >
                        {inCart?(<p className="text-capitalize mb-0" disabled>in inCart</p>):(<i className="fas fa-cart-plus"></i>)}
                      </button>
                    </div>  
                    
                    
                   {/**********card footer***********/}
                   <div className="card-footer d-flex justify-content-between">
                      <p className="align-self-center mb-0">{title}</p>
                      <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{price}</h5>
                   </div>
                </div>
            </ProductWrapper>
        </div>    
        )
    }
}

{/***************PROP TYPE To VERIFY DATA OF BACKEND i.e Typechecking*************/}

Product.propTypes = {
  product: PropTypes.shape({
      id:PropTypes.number,
      img:PropTypes.string,
      title: PropTypes.string,
      price:PropTypes.number,
      inCart:PropTypes.bool
  }) .isRequired
};

const ProductWrapper = styled.div`
.card{
    transition:all 1s linear;
}
.card-footer{
    transition:all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
        background:#004d4d;
        color: white;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
        transition:all 1s linear;
    }
}

.img-container{
    position: relative;
    overflow: hidden;
}
.cart-btn{
    position: absolute;
    overflow: hidden;
    bottom:0px;
    right:0px;
    border-radius: 0.5rem 0 0 0;
    border:none;
    background: #236666;
    color: white;
    padding:0.3rem 0.6rem;
    transform:translate(100%,100%); 
}

.img-container:hover .cart-btn{
    transform:translate(0,0);
    transition:all 1s linear;
}
`