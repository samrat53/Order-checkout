import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import foodImage from "../assets/food1.jpeg";
import "./shoppinglist.css";

const Shoppinglist = (props) => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const order = {
    First: count1,
    Second: count2,
    Third: count3,
  };

  const sortedOrder = {};
  for (const key in order) {
    if (order[key] > 0) sortedOrder[key] = order[key];
  }

  return (
    <>
      <div className="cards">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={foodImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{"First"}</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="counter">
                  <button
                    onClick={() => setCount1((prevValue) => prevValue - 1)}
                  >
                    -
                  </button>
                  <p>{count1}</p>
                  <button
                    onClick={() => setCount1((prevValue) => prevValue + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={foodImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{"Second"}</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="counter">
                  <button
                    onClick={() => setCount2((prevValue) => prevValue - 1)}
                  >
                    -
                  </button>
                  <p>{count2}</p>
                  <button
                    onClick={() => setCount2((prevValue) => prevValue + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={foodImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{"Third"}</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="counter">
                  <button
                    onClick={() => setCount3((prevValue) => prevValue - 1)}
                  >
                    -
                  </button>
                  <p>{count3}</p>
                  <button
                    onClick={() => setCount3((prevValue) => prevValue + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="buttonbox">
            <button
              className="order-now"
              onClick={() => console.log(sortedOrder)}
            >
              orderNow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoppinglist;
