import './ExpenseForm.css'
import {useState} from 'react'


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler =(e) => {
        // console.log(e.target.value)
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
      if(enteredTitle=='0') {
        return <p>Please select greate than 09</p>
      }
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const gatheringAllExpenses = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(gatheringAllExpenses)
        props.firstDataUpReached(gatheringAllExpenses)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

   
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              required={true}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              required={true}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              required={true}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}


export default ExpenseForm;