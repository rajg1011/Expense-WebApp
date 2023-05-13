import React, { useState } from "react";
import Card from "./UI/card";
import './css/expenses.css';
import items from '../data/arrayData'
import Addexpense from "./newExpense/addExpense";
import Filter from "./UI/filter";
import ExpenseItem from "./expenseItem";

const Expenses = () => {
  
  const noItem= <h2 className='expenses-list__fallback'>Found no expenses.</h2>;  // used in line 35
  
  const [itemsData, dataAddingFunction]=useState(items);
  const addExpenseHandler= (dataAdded)=>{    //getting data form addexpense.js
    dataAdded.date= new Date(dataAdded.date);           // change according to our array
    dataAddingFunction((preState)=>{ 
      return [ dataAdded, ...preState ];   //data added to items 
    })
  }
  const [selectedYear, selectedYearFunction]=useState('2022');     //useState for filter handler
  const filterChangeHandler=(year)=>{
    selectedYearFunction(year);
  }

  const filterData=itemsData.filter(data=>{    //to filter data
    return data.date.getFullYear().toString()===selectedYear;   //we can use == and dont convert it in string but we use === bcz it give warning in console
  })


  return (
    <Card className= 'expenses'>
    <Addexpense  onAddExpense={addExpenseHandler} />   
    <Filter selectYear={selectedYear} onFilterChange={filterChangeHandler}/>
    {     //inside {}
     filterData.length===0 ? noItem : filterData.map(element=>{    //Look we dont use items instead use itemsData as it is changing on add data and when use filter we use filterData here
     return(<ExpenseItem               //Time to render list like this;
      key={element.id}
      title={element.title}            // u know u have to use return if use {} in arrow function, if dont want to use it dont use {} and write in one line or use(), it will implied that as return itself if written in single line;
      price={element.price} 
      date={element.date} />)
    })
    }
      {/* <ExpenseItem title={items[0].title} price={items[0].price} date={items[0].date}/> 
      <ExpenseItem title={items[1].title} price={items[1].price} date={items[1].date}/>
      <ExpenseItem title={items[2].title} price={items[2].price} date={items[2].date}/>
      <ExpenseItem title={items[3].title} price={items[3].price} date={items[3].date}/> */}
    </Card>
  );
};

export default Expenses;
