import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.list.length > 0) {
    return (
      <ul className="expenses-list">
        {props.list.map((x) => {
          return (
            <ExpenseItem
              key={x.id}
              title={x.title}
              amount={x.amount}
              date={x.date}
            />
          );
        })}
      </ul>
    );
  } else return <h2 className="expenses-list__fallback">No expenses found!</h2>;
};

export default ExpensesList;
