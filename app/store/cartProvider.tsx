import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: any, action: any) => {
  if (action.type == "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;

    //get index if item is there in cart
    const existsInCartIndex = state.items.findIndex(
      (item: any) => item.id == action.item.id
    );

    //get item at that index
    const existingCartItem = state.items[existsInCartIndex];

    //if item is in cart change amount
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      //update the item
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //get all items
      updatedItems = [...state.items];
      //store the updatedItem
      updatedItems[existsInCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type == "REMOVE") {
    //if amount is 1 remove item from cart otherwise reduce amount
    const existsInCartIndex = state.items.findIndex(
      (item: any) => item.id == action.id
    );
    let updatedItem;
    let updatedItems;
        let updatedAmount;

    const existingCartItem = state.items[existsInCartIndex];
    if (existingCartItem.amount == 1) {
        updatedItems=state.items.filter((item:any)=>item.id!=action.id)
        updatedAmount = state.totalAmount - existingCartItem.price;
    } else {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems=[...state.items]
      updatedItems[existsInCartIndex]=updatedItem;
       updatedAmount = state.totalAmount - existingCartItem.price;

    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
    // const allItems=[...state.items]
  }
  return defaultCartState;
};
const CartProvider = (props: any) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item: any) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
