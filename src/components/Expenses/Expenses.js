import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const [selectedOption, setSelectedOption] = useState('2021');
    
    const selectOptionHandler = (opt) => setSelectedOption(opt);

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedOption);

    let outputContent = <p style={{color: "white"}}>Nothing was found.</p>
    if(filteredExpenses.length)
        outputContent = filteredExpenses.map(expense =>
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        );

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter defaultSelect={selectedOption} onSelectOption={selectOptionHandler}/>
                {outputContent}
            </Card>
        </div>
    );
};

export default Expenses;