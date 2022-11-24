import { useReducer } from 'react';

import CartContext from './Cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateCartTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updateCartItems;
    if (existingCartItem) {
      const updateCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateCartItems = [...state.items];
      updateCartItems[existingCartItemIndex] = updateCartItem;
    } else {
      updateCartItems = state.items.concat(action.item);
    }

    return {
      items: updateCartItems,
      totalAmount: updateCartTotalAmount,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updateCartItems;
    const updateCartTotalAmount = state.totalAmount - existingCartItem.price;
    if (existingCartItem.amount === 1) {
        updateCartItems = state.items.filter(item => item.id !== action.id)
    } else {
        const updateCartItem = {...existingCartItem, amount: existingCartItem.amount -1}
        updateCartItems = [...state.items]
        updateCartItems[existingCartItemIndex] =updateCartItem
    }

    return {
      items: updateCartItems,
      totalAmount: updateCartTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemInCartHandler = item => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item: item,
    });
  };
  const removeItemInCartHandler = id => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemInCartHandler,
    removeItem: removeItemInCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
