import React, { useState } from "react";
import "./css/expenseItem.css";
import DateFunction from "./expenseDate";
import Card from "./UI/card";

const ExpenseItem = (props) => {

  // title from array; But we now want to change it to 'Updated' when clicked on button;
 const [title , setTitleFunction]= useState(props.title);

const clickHandler=(event)=>{
  console.log(event);
  setTitleFunction("updated");
}

  return (
    <Card className="expense-item">
      <DateFunction date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.price}</div>
        <button type="submit" onClick={clickHandler}>Click to change</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
