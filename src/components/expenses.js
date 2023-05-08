import React from "react";
import Card from "./UI/card";
import './expenses.css';
import items from './data/arrayData'
import ExpenseItem from "./expenseItem";

const Expenses = () => {
  return (
    <Card className= 'expenses'>
      <ExpenseItem title={items[0].title} price={items[0].price} />
      <ExpenseItem title={items[1].title} price={items[1].price} />
      <ExpenseItem title={items[2].title} price={items[2].price} />
      <ExpenseItem title={items[3].title} price={items[3].price} />
    </Card>
  );
};

export default Expenses;
