import { useState } from "react";

function AddUserForm (props) {
    const [inputUser, setInputUser] = useState('')
    const [inputAge, setInputAge] = useState('')

    const AddUserHandler = (event) => {
        event.preventDefault()
        const newUser = {id: Math.random(), userName: inputUser, age: inputAge}
        props.onAddUser(newUser)
        setInputAge('')
        setInputUser('')
    }

    return <div>
        <form onSubmit={AddUserHandler}>
            <div>
                <label>Username</label>
                <input type='text' value={inputUser} onChange={e => setInputUser(e.target.value)}/>
            </div>
            <div>
                <label>Age(Years)</label>
                <input type='number' value={inputAge} onChange={e => setInputAge(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    </div>
}

export default AddUserForm;