import Dummy from './components/Expenses/data'
import {useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/form/NewExpense'


const App = () => {

  const [expenses, setExpenses] = useState(Dummy)

const addExpenseDataHandler = (expense) => {
  // console.log(expense)
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
  })
}

  return (
    <>
    <h3 style={{'textAlign': 'center', 'color': 'Blue'}}>Expense Tracker</h3>
     <NewExpense addExpenseData={addExpenseDataHandler} />
     <Expenses expenses={expenses} />
    </>
  )
}


export default App