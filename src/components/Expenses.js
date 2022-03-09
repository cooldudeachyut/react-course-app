import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses(props) {
  const mappedExpensesArray = props.expenseList.map((x) => {
    return (
      <ExpenseItem id={x.id} title={x.title} amount={x.amount} date={x.date} />
    );
  });

  return <Card className="expenses">{mappedExpensesArray}</Card>;
}

export default Expenses;
