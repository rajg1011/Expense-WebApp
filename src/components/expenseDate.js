import React from "react";
import "./expenseDate.css";
import Card from "./UI/card";

const date = new Date();
const day = date.getDay();
const month = date.toLocaleString("default", { month: "long" });
const year = date.getFullYear();

const DateFunction = () => {
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};

export default DateFunction;
