import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser, getUsers } from '../redux/actions'
import EditUser from './EditUser'

const UserCard = ({user}) => {
    const dispatch = useDispatch()
    console.log(user)
    return (
        <div className="user_card">
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h3>{user.number}</h3>
            <button style={{backgroundColor:"rgb(100, 15, 67)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={()=>{dispatch(deleteUser(user._id));dispatch(getUsers())}}>DELETE</button>
            <EditUser el={user}/>
        </div>
    )
}

export default UserCard
