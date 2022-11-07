import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

function Expenses(prop) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem
        title={prop.expense[0].title}
        amount={prop.expense[0].amount}
        date={prop.expense[0].date}
      />
      <ExpenseItem
        title={prop.expense[1].title}
        amount={prop.expense[1].amount}
        date={prop.expense[1].date}
      />
      <ExpenseItem
        title={prop.expense[2].title}
        amount={prop.expense[2].amount}
        date={prop.expense[2].date}
      />
      <ExpenseItem
        title={prop.expense[3].title}
        amount={prop.expense[3].amount}
        date={prop.expense[3].date}
      />
    </Card>
  );
}

export default Expenses;
