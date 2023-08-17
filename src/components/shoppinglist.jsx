import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import foodImage from "../assets/food1.jpeg"
import './shoppinglist.css'


const Shoppinglist = (props) => {

    const {count1,setCount1,children1}=props;
    const {count2,setCount2,children2}=props;
    const {count3,setCount3,children3}=props;
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src={foodImage}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.children1}</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="counter">
                <button onClick={()=>setCount1(prevValue=> prevValue-1)}>-</button>
                <p>{count1}</p>
                <button onClick={()=>setCount1(prevValue=> prevValue+1)}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={foodImage}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.children2}</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="counter">
                <button onClick={()=>setCount2(prevValue=> prevValue-1)}>-</button>
                <p>{count2}</p>
                <button onClick={()=>setCount2(prevValue=> prevValue+1)}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={foodImage}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.children3}</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="counter">
                <button onClick={()=>setCount3(prevValue=> prevValue-1)}>-</button>
                <p>{count3}</p>
                <button onClick={()=>setCount3(prevValue=> prevValue+1)}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoppinglist;
