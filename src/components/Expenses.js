import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const mappedExpensesArray = props.expenseList.map((x) => {
    return (
      <ExpenseItem id={x.id} title={x.title} amount={x.amount} date={x.date} />
    );
  });

  return <div className="expenses">{mappedExpensesArray}</div>;
}

export default Expenses;
