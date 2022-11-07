import ExpenseItem from './ExpenseItem';

function Expenses(prop) {
  return (
    <div className='expenses'>
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
    </div>
  );
}

export default Expenses;
