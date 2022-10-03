import userEvent from "@testing-library/user-event";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./stateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout ad"
        />

        <div>
          <h3>Hello, {!user ? "Guest" : user.email}</h3>
          <h2 className="checkout__title">
            Your Shopping Basket {basket?.length === 0 ? " is EMPTY" : ""}
          </h2>

          {/* Basket items */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item}
            
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
