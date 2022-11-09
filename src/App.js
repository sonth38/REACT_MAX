import { useState } from 'react';
import AddUserForm from './Components/AddUserForm';
import ListUser from './Components/ListUser';
import './App.css';


function App() {
  const [dataUsers, setDataUsers] = useState([])

  const AddUserHandler = (data) => {
    setDataUsers(prev => {
      return [data, ...prev]
    })
  }
  return (
    <div>
      <AddUserForm onAddUser={AddUserHandler}/>
      <ListUser dataUsers={dataUsers}/>
    </div>
  );
}

export default App;
