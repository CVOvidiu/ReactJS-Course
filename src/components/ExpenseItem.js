import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = 'March 28th 2021';
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>{expenseDate}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;