import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "../CartItem/page";

const Cart = (props: any) => {
  const cartCtx = useContext(CartContext);

  const userCart = cartCtx.items
  const hasCartItems = cartCtx.items.length>0
 const closeCartHandler =()=>{
  props.onShow(false);
 }

 
  return (
    <>
      <div className="bg-white w-1/2 h-1/2 overflow-y-auto p-4 py-8 rounded-md flex flex-col gap-4 relative z-0">
        {userCart.map((meal:any) => {
          return (
            <CartItem id={meal.id} name={meal.name} amount={meal.amount} price={meal.price} />
          );
        })}
        <hr className="h-0.5 bg-red-800"></hr>
        <div className="flex justify-between">
          <div className="text-3xl font-extrabold">Total Amount</div>
          <div className="flex flex-col items-end gap-4">
            <div className="text-3xl font-extrabold">Rs {cartCtx.totalAmount}</div>
            <div className="flex gap-4">
              <button className="border-2 border-red-800 text-red-800 hover:text-white hover:bg-red-800 w-16 rounded-xl px-2"
              onClick={closeCartHandler}
              >
                Close
              </button>
              {
                hasCartItems && <button className="border-2 border-red-800 text-white bg-red-800 hover:text-white hover:bg-white hover:text-red-800 w-16 rounded-xl px-2">
                Order
              </button>
              }
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Cart;
