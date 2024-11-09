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

import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import Index from "./Index";
import Checkout from "./components/features/cart/Checkout";
import CartContextProvider from "./store/CartContext";

import ResponsiveFontSize from "./utils/ResponsiveFontSize";
import Discover from "./components/common/discover/Discover";
import MyAccount from "./components/common/MyAccount";
import Join from "./components/common/discover/join/Join";
import Intro from "./components/common/discover/Intro";
import Safety from "./components/common/discover/Safety";
import Apply from "./components/common/discover/join/Apply";
import ApplicationRecords from "./components/common/discover/join/ApplicationRecords";
import Pay from "./components/features/cart/Pay";
import Order from "./components/features/cart/Order";
import Complete from "./components/features/cart/Complete";

function App() {
  ResponsiveFontSize();

  const router = createHashRouter([
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
          path: 'cart/checkout',
          element: (
            <CartContextProvider>
              <Outlet />
            </CartContextProvider>
          ),
          children: [
            {
              index: true,
              element: <Checkout />
            },
            {
              path: 'order',
              element: <Order />
            },
            {
              path: 'pay',
              element: <Pay />
            },
            {
              path: 'complete',
              element: <Complete />
            }
          ]
        },
        // {
        //   path: "checkout",
        //   element: (
        //     <CartContextProvider>
        //       <Checkout />
        //     </CartContextProvider>
        //   )
        // },
        // {
        //   path: 'pay',
        //   element: <Pay />
        // },
        {
          path: "discover",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <Discover />
            },
            {
              path: "join",
              element: <Outlet />,
              children: [
                {
                  index: true,
                  element: <Join />
                },
                {
                  path: "apply",
                  element: <Apply />
                },
                {
                  path: "records",
                  element: <ApplicationRecords />
                }
              ] 
            },
            {
              path: "about-us",
              element: <Intro />
            },
            {
              path: "safety",
              element: <Safety />
            }
          ]
        },
        {
          path: "my-account",
          element: <MyAccount />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
