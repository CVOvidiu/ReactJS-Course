import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const [selectedOption, setSelectedOption] = useState('2022');
    
    const selectOptionHandler = (opt) => setSelectedOption(opt);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter defaultSelect={selectedOption} onSelectOption={selectOptionHandler}/>
                {props.expenses.map(expense =>
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                )}
            </Card>
        </div>
    );
};

export default Expenses;