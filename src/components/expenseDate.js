import React from "react";
import "./css/expenseDate.css";
import Card from "./UI/card";

const DateFunction = (props) => {
  const dateGet = props.date;
  const day = dateGet.getDate();
  const month = dateGet.toLocaleString("default", { month: "long" });
  const year = dateGet.getFullYear();
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};

export default DateFunction;
