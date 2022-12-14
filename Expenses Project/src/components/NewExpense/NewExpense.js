import React, {useState} from 'react';

import './NewExpense.css';

function NewExpense(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);

        // After submission, reset the input fields to empty
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        setShowForm(false);
    };

    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => showForm === false ? setShowForm(true) : setShowForm(false);

    if(!showForm)
        return (
            <div className='new-expense'>
                <button onClick={showFormHandler}>Add New Expense</button>
            </div>
        );
    else
        return (
            <div className="new-expense">
                <form action="" onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={showFormHandler}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
            </div>
        );
};

export default NewExpense;