import Expenses from './Components/Expenses';

function App() {
  const expense = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Honda', amount: 520.67, date: new Date(2020, 5, 20) },
    { title: 'Toyota', amount: 700.25, date: new Date(2022, 1, 5) },
    { title: 'Mercedes', amount: 2000.12, date: new Date(2025, 8, 28) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expense={expense}/>
    </div>
  );
}

export default App;
