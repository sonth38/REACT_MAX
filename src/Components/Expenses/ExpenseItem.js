import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(prop) {
  const [title, setTitle] = useState(prop.title)
  const clickHandler = () => {
    setTitle('Update!')
    console.log(title)
  }
  console.log('re-render',title)

  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${prop.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
