import Expensedate from './Expensedate'
import './ExpenseItem.css'
import Card from '../ui/Card';
// import {useState} from 'react'

const ExpenseItem = (props) => {

  // const [titleChange, setTitleChange] = useState(props.title)
  console.log('components evaluated checking for state')

  // const clickHandler = (e) => {
  //   e.preventDefault()
  //   setTitleChange('Updated')

  // }

    return (
      <Card className="expense-item">
        <Expensedate date={props.date} />

        <div className="expense-item__description">
          <h3 style={{ textAlign: "center" }}>{props.title}</h3>
          <div className="expense-item__price">₹ {props.amount}</div>
        </div>

        {/* <button onClick={clickHandler}>Click</button> */}
      </Card>
    );
}


export default ExpenseItem;