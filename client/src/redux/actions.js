import axios from "axios"
import { ADD, DELETE, EDIT, GET } from "./actionTypes"


// get users
export const getUsers=()=>async(dispatch)=>{
    try {
        let res=await axios.get("/user/get")
        dispatch({
            type:GET,
            payload:res.data
        })
        console.log(res.data)
    } catch (error) {
        alert('get error')
    }
};

//delete users
export const deleteUser=(id)=>async(dispatch)=>{
    try {
        let res=await axios.delete(`/user/delete/${id}`)
        dispatch({
            type:DELETE,
            payload:res.data,
        })
    } catch (error) {
        alert('delete error')
    }
};

// add new user
export const addNewUser=(name,email,number)=>async(dispatch)=>{
    try {
        let newUser={name,email,number}
        let res =await axios.post("/user/post",newUser)
        dispatch({
            type:ADD,
            payload:res.data
        })
    } catch (error) {
        alert('add error')
    }
};

//edit user
export const editUser=(name,email,number,id)=>async(dispatch)=>{
    try {
        let neweditUser={name,email,number,id}
        let res=await axios.put(`/user/edit/${id}`,neweditUser)
        dispatch({
            type:EDIT,
            payload:res.data
        })
    } catch (error) {
        alert('edit error')
    }
}