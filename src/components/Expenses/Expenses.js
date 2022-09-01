import ExpenseFIlter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../ui/Card";
import {useState} from 'react'
import ExpensesChart from "./ExpensesChart";


const Expenses = ({expenses}) => {

  const [filteredYear, setFIlteredYear] = useState('2019')

  const addedFilterDateHandler = (date) => {
    // console.log(date)
    setFIlteredYear(date)
  }
 
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear() == filteredYear
  })

    return (
      <Card className="expenses">
        <ExpenseFIlter
          selected={filteredYear}
          changeFilter={addedFilterDateHandler}
        />


       <ExpensesChart expenses={filteredExpenses} />


        {/* {filteredExpenses.length === 0 ? (
          <p style={{ color: "red", textAlign: "center" }}>
            No data found for {filteredYear} year
          </p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}



        {filteredExpenses.length === 0 && (
          <p style={{ color: "red", textAlign: "center" }}>
            No data found for {filteredYear} year
          </p>
        )}

        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}




        {/* below data comes from dummy json/ js file */}
        {/* <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />

        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />

        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />

        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        /> */}
      </Card>
    );
}


export default Expenses;