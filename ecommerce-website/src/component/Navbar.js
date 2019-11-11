import React, { Component } from 'react';
import {Link} from 'react-router-dom';
/**********Import image from the src folder and not from the public folder************/
import logo from '../logo.svg';
/***********Styled Component***********/
import styled from 'styled-components';

const Nav = styled.nav`
background: #013434;
color: #004d4d;
cursor: pointer;
.nav-link{
    color: white;
}
`
 {/*we can also pass props to the styled component like we have passed props to the background if cart props is available or not...
 this props is passed from detail component*/}
export const ButtonContainer = styled.button`
background: #236666;
color:#99ffff;
border: none;
border-radius: 4px;
padding: 0.8rem;
background: ${(props)=>props.cr? "#990000": "#236666"};
color: ${(props) => props.cr?" #ff9999":"#99ffff"}    
  
&:hover{
    color: 	 #013434;   
    background: rgba(0,0,0,.03);
    background: ${(props)=>props.nv? "#ccffff": "rgba(0,0,0,.03)"};
}
`


export default class Navbar extends Component {
    
    render(){
        return(
            <Nav className="navbar">
                <Link to="/"><img src={logo} className="nav-img" alt="logo"></img></Link>
                <Link to="/" className="nav-link" >Product</Link>
                <Link to="/Cart"><ButtonContainer nv="background-color" ><i className="fas fa-cart-plus">my cart</i></ButtonContainer></Link>
            </Nav>
          
        )
    }
}

