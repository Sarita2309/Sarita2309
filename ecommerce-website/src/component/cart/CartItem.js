import React from 'react';



export default function CartItem({item,value}){
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return(
        <div className="row my-2 text-capitalize text-center">
            
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:"5rem", height:"5rem"}} className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <span/* className="d-lg-none"*/>Product: {title}</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <span /*className="d-lg-none"*/>Price: ${price}</span>
            </div>
            
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <button  onClick={()=>decrement(id)}>-</button>
                        <button  onClick={()=>decrement(id)}>{count}</button>
                        <button  onClick={()=>increment(id)}>+</button>
                    </div>                
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <button onClick={()=>removeItem(id)}>Remove</button>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <strong>item total: ${total}</strong>
            </div>
        </div>
    )
}

