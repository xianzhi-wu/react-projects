import MainHeader from "./components/layouts/MainHeader";
import Meals from "./components/features/Meals/Meals";
import Cart from "./components/features/cart/Cart";

export default function Index() {
  return (
    <>
      <MainHeader />
      <Meals />
      <Cart />
    </>
  );
}