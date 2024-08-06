import React,{useState} from "react";
import DemoList from "./component/Demo/DemoList";
import Button from "./component/UI/Button/Button";

import './App.css'

function App() {
  const [order , setOrder] = useState(true)
  const changeTitleHandler = (order)=>{
    setOrder(order);
  }
  return (
    <div className="main">
      <DemoList order={order} items={[1,2,3,4,5,6]}/>
      <Button onClick={changeTitleHandler} />
    </div>
  );
}

export default App;
