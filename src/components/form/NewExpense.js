import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import {useState} from 'react'


const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expensedata = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expensedata)
        props.addExpenseData(expensedata)
        setIsEditing(false)
    }

    const startEditingHandler=() => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
        {!isEditing && <button type="submit" onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm  firstDataUpReached = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}


export default NewExpense;