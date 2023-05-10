import React, { useState } from "react";
import Card from "./UI/card";
import './css/expenses.css';
import items from '../data/arrayData'
import Addexpense from "./newExpense/addExpense";
import Filter from "./UI/filter";
import ExpenseItem from "./expenseItem";

const Expenses = () => {
  const [selectedYear, selectedYearFunction]=useState('2022');   //this is use to set the default value in filter using selectYear prop
  const filterChangeHandler=(year)=>{
    selectedYearFunction(year);
  }
  return (
    <Card className= 'expenses'>
    <Addexpense />
    <Filter selectYear={selectedYear} onFilterChange={filterChangeHandler}/>
      <ExpenseItem title={items[0].title} price={items[0].price} date={items[0].date}/> 
      <ExpenseItem title={items[1].title} price={items[1].price} date={items[1].date}/>
      <ExpenseItem title={items[2].title} price={items[2].price} date={items[2].date}/>
      <ExpenseItem title={items[3].title} price={items[3].price} date={items[3].date}/>
    </Card>
  );
};

export default Expenses;
