import { useState } from "react";
import ExpensesOutput from "../ExpensesOutput/ExpensesOutput";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css';
import Chart from '../Chart/Chart';

function Expenses(props) {
    const [selectedOption, setSelectedOption] = useState('2021');
    
    const selectOptionHandler = (opt) => setSelectedOption(opt);

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedOption);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter defaultSelect={selectedOption} onSelectOption={selectOptionHandler}/>
                <Chart expenses={filteredExpenses} />
                <ExpensesOutput expenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;