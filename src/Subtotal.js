import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./stateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from 'react-router-dom';
export default function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate=useNavigate()
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of Homework  */}
              Subtotal ({basket.length}):<strong>{value}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e=>navigate('/payment')}>Processed to Checkout</button>
    </div>
  );
}
