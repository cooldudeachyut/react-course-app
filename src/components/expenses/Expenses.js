import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState("2022");

  const mappedExpensesArray = props.expenseList.map((x) => {
    return (
      <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date} />
    );
  });

  const onOptionChangeHandler = (selectedYear) => {
    setCurrentYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter onOptionChange={onOptionChangeHandler} />
      <Card className="expenses">{mappedExpensesArray}</Card>
    </div>
  );
};

export default Expenses;
