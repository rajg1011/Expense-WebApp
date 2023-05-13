import React, {useState} from "react";
import './newExpenseCSS/form.css'

const Expenseform = (props) => {

  const [inputObject, inputFunction]=useState({    // // we use useState to store the data bcz we use useState in submit to change state either to just store data get from event we can only use variables.
    enteredTitle:"",
    enteredAmount:"",
    enteredDate:""
  });

  const titleHandler=(event)=>{
    inputFunction((prevState)=>{
      return {...prevState, enteredTitle: event.target.value}
    })
  }

  const amoutHandler=(event)=>{
    inputFunction((prevState)=>{
      return {...prevState, enteredAmount: event.target.value}
    })
  }

  const dateHandler=(event)=>{
    inputFunction((prevState)=>{    
      return {...prevState, enteredDate: event.target.value}
    })
  }

  const submitHandler=(event)=>{
    event.preventDefault();

    const stateCollected= {
      title: inputObject.enteredTitle,   
      price: inputObject.enteredAmount,
      date: inputObject.enteredDate
    }
    props.onGetDataFromForm(stateCollected); 
    inputFunction({    
      enteredTitle:"",     
      enteredAmount:"",
      enteredDate:""
    })
  }

  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={inputObject.enteredTitle} onChange={titleHandler} required />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="1" step="10000000000" value={ inputObject.enteredAmount} onChange={amoutHandler}  required />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={inputObject.enteredDate} onChange={dateHandler} required />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  );
};

export default Expenseform;
