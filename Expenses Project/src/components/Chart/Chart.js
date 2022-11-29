import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];

    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // Jan = 0
        dataPoints[expenseMonth].value += expense.amount;
    }

    const totalMax = Math.max(...dataPoints.map(dataPoint => dataPoint.value));

    return (
        <div className='chart'>
            {dataPoints.map(dataPoint =>
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            )}
        </div>      
    );
};

export default Chart;