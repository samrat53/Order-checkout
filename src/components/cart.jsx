import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./cartStyles.css";
const Cart = (props) => {
  const location = useLocation();
  const sortedOrder = location.state;

  const price = { First: 10, Second: 20, Third: 30 };

  let total = 0;
  for (let key1 in sortedOrder) {
    for (let key2 in price) {
      if (key1 === key2) total = total + sortedOrder[key1] * price[key2];
    }
  }
  return (
    <>
      <div className="summary">
        <div className="inside-box">
          <div className="header">
            <h1>Your orders:</h1>
          </div>
          <div className="order-list">
            <ul>
              {Object.keys(sortedOrder).map(
                (
                  item //item are the keys and sortedOrder[item] value
                ) => (
                  <li key={item}>
                    {item} : {sortedOrder[item]}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="total">
            <h2>Payable amount = Rs. {total}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
