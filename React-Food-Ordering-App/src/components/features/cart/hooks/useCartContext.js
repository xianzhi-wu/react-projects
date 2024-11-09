export const useCartTotalPrice = (cartCtx) => {
  const cartTotalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.price * 100 * item.amount;
  }, 0);

  return cartTotalPrice;
};

export const useCartTotalItems = (cartCtx) => {
  const cartTotalItems = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return cartTotalItems;
}
