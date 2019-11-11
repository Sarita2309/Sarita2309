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
                    const {ModalOpen , closeModal} = value;
                    const {title, img,  inCart, price} = value.modalProduct;
                     
                   /* if (!ModalOpen){
                        return null;
                    }
                    else{
                        <ModalContainer>
                          
                        </ModalContainer>
                    }*/
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`

`