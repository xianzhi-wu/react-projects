import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
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
  const [cart, dispatchAcction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchAcction({type: "ADD-ITEM", item });
  }

  const removeItem = (id) => {
    dispatchAcction({type: "REMOVE-ITEM", id });
  }

  const cartContextValue = {
    items: cart.items,
    addItem,
    removeItem
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;

// Scaling Up with Reducer and Context https://react.dev/learn/scaling-up-with-reducer-and-context
// Reducers let you consolidate a component’s state update logic. 
// Context lets you pass information deep down to other components. 
// You can combine reducers and context together to manage state of a complex screen.
