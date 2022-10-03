import React from 'react';
import "./Order.css"
import moment from "moment";
import History from './History';
import CurrencyFormat from "react-currency-format"; 

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
            order_id: <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <History
                id={item} 
              
              />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <h3 className="order__total">
                        Order Total :<strong>{value}</strong>
                    </h3>

                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100} //part of homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                            />
        </div>
    )
}

export default Order;