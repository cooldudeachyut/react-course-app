import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState(
    new Date().getFullYear().toString()
  );

  const filteredExpensesArray = props.expenseList.filter((x) => {
    return x.date.getFullYear().toString() === currentYear;
  });

  const onOptionChangeHandler = (selectedYear) => {
    setCurrentYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={currentYear}
        onOptionChange={onOptionChangeHandler}
      />
      <ExpensesList list={filteredExpensesArray}/>
    </Card>
  );
};

export default Expenses;
