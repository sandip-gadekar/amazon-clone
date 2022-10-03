import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./stateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51Ljp12SDX5fJgiHbtv7GmReaiUKnaQm1QU67UIFd8aKyO6gwYtvTQ9tuBT49lWIPnedLU3fvmlesXqBy0X2rtydv001kPpnl4X"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //run only once when app compoent get render
    auth.onAuthStateChanged((authUser) => {
      //console.log("user ," +authUser.email);
      if (authUser) {
        //the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is just logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
