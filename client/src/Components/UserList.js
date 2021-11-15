import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions'
import NavBar from './NavBar'
import UserCard from './UserCard'

const UserList = () => {
    const {users,loading} = useSelector(state => state)
    console.log("users",users)
const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getUsers())
    }, [])
    const [text, setText] = useState("")
    return (
        <div>
            <NavBar text={text} setText={setText}/>
        <div className="user-list">
            {loading? <Spinner animation="border" variant="danger" />:
                users.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())).map((user,i)=><UserCard user={user} key={i}/>)
            }
        </div>
        </div>
    )
}

export default UserList
