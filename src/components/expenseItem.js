import React from "react";
import "./expenseItem.css";
import DateFunction from "./expenseDate";
import Card from "./UI/card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <DateFunction />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
