import MainHeader from "./components/layouts/MainHeader";
import Products from "./components/features/products/Products";
import Cart from "./components/features/cart/Cart";

export default function Index() {
  return (
    <>
      <MainHeader />
      <Products />
      <Cart />
    </>
  );
}