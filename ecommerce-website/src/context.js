import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();

class ProductProvider extends Component{

   
    state ={////////////////////////////////////////////////////////////////
       /* products: storeProducts, it will change the permanent value of storeProducts..bcoz object is passed as a ref */
        products:[],
        detailProduct: detailProduct,
        cart: storeProducts,
        ModalOpen: false,  /////////there is modalOpen
        modalProduct: detailProduct, 
        cartSubtotal:0,
        cartTax:0, 
        cartTotal:0
    };
    /****to find the unique item matching with its id*********/
     getItem = (id) =>{ /////////////////////////////
        const pr = this.state.products.find((item) =>item.id === id);
        return pr;
    }

    handleDetail = (id)=>{
        const prod = this.getItem(id);
        this.setState(()=>{
            return(detailProduct:prod)
        })
              
    }

    addToCart = (id) =>{
       /*let tempProducts = [... this.state.products];
       const index = tempProducts.indexOf(this.getItem(id));
       const product = tempProducts[index];
       product.inCart = true;
       product.count=1;
       const price= product.price;
       product.total=price;
       this.setState(
           ()=>{
               return{ products: tempProducts, cart:[...this.state.cart,product]};
           },
           ()=>{
               console.log(this.state);
           }
       );*/
    }
    setProducts = () =>{ ///////////////////////////////////////////////////
        let tempProducts = [];
        storeProducts.forEach((item)=>{
            const singleItem = { ...item}; // here we are passing the value and not reference by using spread operator in singleItem
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(()=>{
             return{
                 products: tempProducts
             };
        });
        
    } 
    openModal = id=>{     // when we click on a particular modal with a particular id, this modal will open.
        const prdct = this.getItem(id);
        this.setState(()=>{
            return{ modalProduct:prdct, ModalOpen: true}
        })
    }

    closeModal = () =>{
        this.setState(()=>{
            return { modalOpen: false};
        });
    }

    componentDidMount(){ ///////////////////////////////////////////////////
        this.setProducts();
    }
    /***WHY WE USE COMPONENT DID MOUNT...actually if we change state,in JS basically object is passed as a reference..
     and here JSON (storeProducts) which is object is passed as ref(products). Therefore our original value will changed ************/
    /*tester = () =>{
        console.log('state Product :', this.state.products[0].inCart);
        console.log('data Products:', storeProducts[0].inCart);
       
        const tempProducts = this.state.products;
        tempProducts[0].inCart = true;
        this.setState(()=>{
           return{products:  tempProducts} 
        },()=>{ {/*it is a callback fn executes after the state changes*//*}
            console.log('state Product :', this.state.products[0].inCart);
            console.log('data Products:', storeProducts[0].inCart);   
        })
    }*/
    increment = (id) =>{
        console.log("this is increment method");
    }
    decrement = (id) =>{
        console.log("this is decrement method");
    }
    removeItem = (id) =>{
        console.log("this is removeItem method");
    }
    clearCart= () =>{
        console.log("cart was cleared");
    }
    render(){
        return(
            <ProductContext.Provider value={{ 
              ...this.state,
            handleDetail: this.handleDetail,
              addToCart :this.addToCart,
              openModal: this.openModal,
              closeModal:this.closeModal,
              increment:this.increment,
              decrement: this.decrement,
              removeItem:this.removeItem,
              clearCart:this.clearCart,
            }}>  
            {/*<button onClick={this.tester}>Test</button>   */}
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};