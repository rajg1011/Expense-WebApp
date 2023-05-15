import React, { useState } from "react";
import Card from "./UI/card";
import "./css/expenses.css";
import items from "../data/arrayData";
import Addexpense from "./newExpense/addExpense";
import Filter from "./UI/filter";
import ExpenseItem from "./expenseItem";
import Chart from "./Chart/chart";

const Expenses = () => {
  const noItem = (
    <h2 className="expenses-list__fallback">Found no expenses.</h2>
  );

  const [itemsData, dataAddingFunction] = useState(items);
  const addExpenseHandler = (dataAdded) => {
    dataAdded.date = new Date(dataAdded.date);
    dataAddingFunction((preState) => {
      return [dataAdded, ...preState];
    });
  };
  const [selectedYear, selectedYearFunction] = useState("2021");
  const filterChangeHandler = (year) => {
    selectedYearFunction(year);
  };

  const filterData = itemsData.filter((data) => {
    return data.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <Addexpense onAddExpense={addExpenseHandler} />
      <Chart dataArray={filterData} />
      <Filter selectYear={selectedYear} onFilterChange={filterChangeHandler} />
      {
        //inside {}
        filterData.length === 0
          ? noItem
          : filterData.map((element) => {
              return (
                <ExpenseItem
                  key={element.id}
                  title={element.title}
                  price={element.price}
                  date={element.date}
                />
              );
            })
      }
    </Card>
  );
};

export default Expenses;
