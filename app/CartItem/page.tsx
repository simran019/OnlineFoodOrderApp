"use client";

import { useContext } from "react";
import CartContext from "../store/cart-context";

const CartItem =(props:any)=>{
    const {id,name,amount,price} = props;
    const cartCtx = useContext(CartContext);

    const addItemHandler =(item:any)=>{
        cartCtx.addItem(item)
    }

    const removeItemHandler=(id:string)=>{
        cartCtx.removeItem(id)
    }
    return(
        <div
              className="flex justify-between items-center mb-4 p-2"
              key={id}
            >
              <div className="w-1/3 flex flex-col justify-between gap-2 font-bold h-18">
                <div className="text-2xl">{name}</div>
                <div className="flex justify-between">
                  <div className="text-red-800">Rs {price}</div>
                  <div>x{amount}</div>
                </div>
              </div>
              <div className="w-1/3 flex items-center gap-2 justify-end">
                <button className="w-10 border-red-900 border-2  text-center rounded-md hover:text-white hover:bg-red-800"
                onClick={()=>removeItemHandler(props.id)}
                >
                  -
                </button>
                <button className="w-10 border-red-900 border-2  text-center rounded-md hover:text-white hover:bg-red-800"
                onClick={()=>addItemHandler({id,name,amount:1,price})}
                >
                  +
                </button>
              </div>
            </div>
    )
}

export default CartItem;