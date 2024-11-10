import { createContext, useMemo, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totals: {
    totalItems: 0,
    totalPrice: 0,
    discountPrice: 0,
  },
  discount: 0,
  addItem: () => {},
  removeItem: () => {}
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD-ITEM": {
      const existingItemIndex = state.items.findIndex(item => (
        item.id === action.item.id
      ));

      const updatedItems = [...state.items];

      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + 1
        }
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({...action.item, amount: 1});
      }

      return {...state, items: updatedItems};
    }

    case "REMOVE-ITEM": {
      const existingItemIndex = state.items.findIndex(item => (
        item.id === action.id
      ));

      const updatedItems = [...state.items];

      const existingItem = state.items[existingItemIndex];
      if (existingItem.amount === 1) {
        updatedItems.splice(existingItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1
        }
        updatedItems[existingItemIndex] = updatedItem;
      }

      return {...state, items: updatedItems};
    }

    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [cart, dispatchAction] = useReducer(cartReducer, {
    items: [],
    totals: { 
      totalItems: 0, 
      totalPrice: 0, 
      discountPrice: 0 
    },
    discount: 5,
  });

  const addItem = (item) => {
    dispatchAction({ type: "ADD-ITEM", item });
  }

  const removeItem = (id) => {
    dispatchAction({ type: "REMOVE-ITEM", id });
  }

  const totals = useMemo(() => {
    const totalItems = cart.items.reduce((total, item) => total + item.amount, 0);
    
    let totalPrice = cart.items.reduce((total, item) => total + item.price * 100 * item.amount, 0);
    const discountPrice = ((totalPrice - cart.discount * 100) / 100).toFixed(2);
    totalPrice = (totalPrice / 100).toFixed(2);
    
    return { totalItems, totalPrice, discountPrice };
  }, [cart.items, cart.discount]);

  const cartContextValue = {
    items: cart.items,
    totals,
    discount: cart.discount,
    addItem,
    removeItem
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;