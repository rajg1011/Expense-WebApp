import React from "react";
import Expenseform from "./form";
import "./newExpenseCSS/addExpense.css";

const Addexpense = (props) => {
  const getDatafromFormHandler = (data) => {
    const dataInserted = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(dataInserted);
  };

  return (
    <div className="new-expense">
      <Expenseform onGetDataFromForm={getDatafromFormHandler} />
    </div>
  );
};

export default Addexpense;
