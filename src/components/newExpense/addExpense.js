import React from "react";
import Expenseform from "./form";
import './newExpenseCSS/addExpense.css';

const Addexpense = () => {

  const getDatafromFormHandler=(data)=>{   // data is stateCollected that u got from form.js when pass as argument.
    // console.log(data);
    const dataInserted= {
      ...data,
      id: Math.random().toString()   //some random no.
    }
    // console.log(dataInserted);
  }


  return (
    <div className='new-expense'>
    <Expenseform  onGetDataFromForm={getDatafromFormHandler} />
    </div>
  );
};

export default Addexpense;
