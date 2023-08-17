import { useState } from "react";
import "./App.css";
import Shoppinglist from "./components/shoppinglist";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const order= {
    first: count1,
    second: count2,
    third: count3,
  };

  const sortedOrder={};
  for(const key in order){
    if(order[key]>0) sortedOrder[key]=order[key];
  }

  return (
    <>
      <div className="cards">
        <Shoppinglist
          children1="first"
          children2="second"
          children3="third"
          count1={count1}
          setCount1={setCount1}
          count2={count2}
          setCount2={setCount2}
          count3={count3}
          setCount3={setCount3}
        />
      </div>
      <button className="order-now" onClick={()=>console.log(sortedOrder)}>
        orderNow
      </button>
    </>
  );
}

export default App;
