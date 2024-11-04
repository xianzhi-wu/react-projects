// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Index from "./Index";
// import Checkout from "./components/features/cart/Checkout";

// import ResponsiveFontSize from "./utils/ResponsiveFontSize";

// function App() {
//   ResponsiveFontSize();

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Index />}></Route>
//         <Route path="/checkout" element={<Checkout />}></Route>
//       </Routes>
//     </Router>
//   )
// }

// export default App;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Index from "./Index";
import Checkout from "./components/features/cart/Checkout";
import CartContextProvider from "./store/CartContext";

import ResponsiveFontSize from "./utils/ResponsiveFontSize";

function App() {
  ResponsiveFontSize();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      errorElement: <div>Something went wrong!</div>,
      children: [
        {
          index: true,
          element: (
            <CartContextProvider>
              <Index />
            </CartContextProvider>
          )
        },
        {
          path: "checkout",
          element: (
            <CartContextProvider>
              <Checkout />
            </CartContextProvider>
          )
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
