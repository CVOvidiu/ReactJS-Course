import ExpenseItem from "../Expenses/ExpenseItem";
import './ExpensesOutput.css';

const ExpensesOutput = props => {
    if(!props.expenses.length) 
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    
    return (
        <ul className="expenses-list">
            {props.expenses.map(expense =>
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            )}
        </ul>
    );
};

export default ExpensesOutput;