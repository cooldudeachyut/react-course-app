import React, { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";

const Expenses = (props) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear().toString());

  const filteredExpensesArray = props.expenseList.filter((x) => {
    console.log(x.date.getFullYear());
    return (x.date.getFullYear().toString() === currentYear);
  });

  console.log(filteredExpensesArray);

  const mappedExpensesArray = filteredExpensesArray.map((x) => {
    return (
      <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date} />
    );
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
      {mappedExpensesArray}
    </Card>
  );
};

export default Expenses;
