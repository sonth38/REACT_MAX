function ListUser (props) {
    return <ul>
        {props.dataUsers.map(user => {
            return <li key={user.id}>{`${user.userName} (${user.age})`}</li>
        })}
    </ul>
}

export default ListUser;