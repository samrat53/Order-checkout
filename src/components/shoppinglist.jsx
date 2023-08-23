import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import foodImage from "../assets/food1.jpeg";
import "./shoppinglist.css";
import { Link, useNavigate } from "react-router-dom";

const Shoppinglist = (props) => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  let [sortedOrder, setSortedOrder] =useState({"No order": 0});
  useEffect(()=>{
    const order = {
      First: count1,
      Second: count2,
      Third: count3
    };

    const updatedOrder={};

    for (const key in order) {
      if (order[key] > 0) updatedOrder[key] = order[key];
    }

  setSortedOrder(updatedOrder);
  }, [count1  ,count2, count3])
  
  const navigate = useNavigate();

  return (
    <>
      <div className="cards">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={foodImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{"First- Rs.10" } </h5>
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
                <h5 className="card-title">{"Second- Rs.20"}</h5>
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
                <h5 className="card-title">{"Third- Rs.30"}</h5>
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
              // onClick={() => console.log(sortedOrder)}
              onClick={()=> navigate("/cart", {state: sortedOrder})}> 
              Order Now!
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoppinglist;
