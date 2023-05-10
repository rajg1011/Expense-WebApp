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
      title: inputObject.enteredTitle,    //this is how u get object data if use one state
      price: inputObject.enteredAmount,
      date: inputObject.enteredDate
    }
    console.log(stateCollected);
    props.onGetDataFromForm(stateCollected);  //we instantly call it

// To make form input empty we double bind bu use value in input
    inputFunction({    // we here use functon to change the value bcz in useState we can change value only by function not like inputObject.enteredTitle="";
      enteredTitle:"",   // we mainly use useState just for two binding either we can use variables to get object. In this case 
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

//Look if u want to do this without var then u can do binding bcz as u take value of input as titleHandlerValue then it set as "";

// import React, {useState} from "react";
// import './form.css'

// const Expenseform = () => {


//   var titleHandlerValue="";
//   var priceHandlerValue="";
//   var dateHandlerValue="";
//   const titleHandler=(event)=>{
//     console.log(event.target.value);
//     titleHandlerValue=event.target.value;
//   }

//   const amoutHandler=(event)=>{
//     console.log(event.target.value);
//     priceHandlerValue=event.target.value;
//   }

//   const dateHandlerValueHandler=(event)=>{
//     console.log(event.target.value);
//     dateHandlerValue=event.target.value;
//   }

//   const submitHandler=(event)=>{
//     event.preventDefault();

//     const stateCollected= {
//       title: titleHandlerValue,
//       price: priceHandlerValue,
//       date: dateHandlerValue
//     }
//     console.log(stateCollected);


//     titleHandlerValue="";
//     priceHandlerValue="";
//     dateHandlerValue="";

//   }

//   return (
//       <form onSubmit={submitHandler}>
//         <div className="new-expense__controls">
//           <div className="new-expense__control">
//             <label>Title</label>
//             <input type="text" value={titleHandlerValue} onChange={titleHandler} required />
//           </div>
//           <div className="new-expense__control">
//             <label>Amount</label>
//             <input type="number" min="0.01" step="1" value={priceHandlerValue} onChange={amoutHandler}  required />
//           </div>
//           <div className="new-expense__control">
//             <label>DateHandlerValue</label>
//             <input type="date" min="2019-01-01" max="2022-12-31" value={dateHandlerValue} onChange={dateHandlerValueHandler} required />
//           </div>
//         </div>
//         <div className="new-expense__actions">
//           <button type="submit">Add Expense</button>
//         </div>
//       </form>
//   );
// };

// export default Expenseform;

