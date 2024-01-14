import React from 'react'

const incomeExpenses = (props) => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>INCOME</h4>
                <p className='money plus'>+${props.income}</p>
            </div>
            <div>
                <h4>EXPENSES</h4>
                <p className='money minus'>-${props.expenses}</p>
            </div>
        </div>
    )
}

export default incomeExpenses
