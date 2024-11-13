import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

import CartContextProvider from "./store/CartContext";

import ResponsiveFontSize from "./utils/ResponsiveFontSize";

import Index from "./Index";
import Checkout from "./components/features/cart/Checkout";
import Discover from "./components/common/discover/Discover";
import MyAccount from "./components/features/account/MyAccount";
import Join from "./components/common/discover/join/Join";
import Intro from "./components/common/discover/Intro";
import Safety from "./components/common/discover/Safety";
import Apply from "./components/common/discover/join/Apply";
import ApplicationRecords from "./components/common/discover/join/ApplicationRecords";
import Pay from "./components/features/cart/Pay";
import Order from "./components/features/cart/Order";
import Complete from "./components/features/cart/Complete";
import Address from "./components/common/address/Address";
import AddAdress from "./components/common/address/AddAdress";
import Balance from "./components/features/account/MyBalance";
import Help from "./components/features/account/help/Help";
import Coupons from "./components/features/account/MyCoupons";
import Favorites from "./components/features/account/MyFavorites";
import CookingQuestions from "./components/features/account/help/CookingQuestions";
import OrderingQuestions from "./components/features/account/help/OrderingQuestions";
import PayingQuestions from "./components/features/account/help/PayingQuestions";
import Feedback from "./components/features/account/help/Feedback";
import Orders from "./components/features/account/MyOrders";
import Reviews from "./components/features/account/MyReviews";
import ToReview from "./components/features/account/ToReview";
import Review from "./components/features/account/Review";

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
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <MyAccount />
            },
            {
              path: "balance",
              element: <Balance />
            },
            {
              path: "coupons",
              element: <Coupons />
            },
            {
              path: "favorites",
              element: <Favorites />
            },
            {
              path: "orders",
              element: <Orders />
            },
            {
              path: "to-be-reviewed",
              element: <ToReview />
            },
            {
              path: "review",
              element: <Review />
            },
            {
              path: "reviews",
              element: <Reviews />
            },
            {
              path: "help",
              element: <Outlet />,
              children: [
                {
                  index: true,
                  element: <Help />
                }, 
                {
                  path: 'cooking',
                  element: <CookingQuestions />
                }, 
                {
                  path: "ordering",
                  element: <OrderingQuestions />
                },
                {
                  path: "paying",
                  element: <PayingQuestions />
                },
                {
                  path: "feedback",
                  element: <Feedback />
                }
              ]
            }
          ]
        },
        {
          path: "address",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <Address />
            },
            {
              path:"add",
              element: <AddAdress />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
