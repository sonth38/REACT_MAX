import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense (props) {
    const saveExpenseDataHandler = enteredExpenseDate => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }

        console.log('data', expenseData)
        props.onAddExpense(expenseData)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;