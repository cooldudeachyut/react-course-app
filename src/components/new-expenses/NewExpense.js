import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpenseState, setNewExpenseState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: "n" + Math.floor(Math.random() * 1000).toString(),
    };

    props.onAddExpense(expenseData);
  };

  const newExpenseStateHandler = () => {
    setNewExpenseState((prevState) => {
      return !prevState;
    });
  };

  if (newExpenseState) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          collapseNewExpense={newExpenseStateHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={newExpenseStateHandler}>Add New Expense</button>
      </div>
    );
  }
};

export default NewExpense;
