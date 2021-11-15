import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import {  editUser, getUsers } from '../redux/actions';

const EditUser = ({el}) => {
    const [name, setName] = useState(el.name);
const [email, setEmail] = useState(el.email);
const [number, setNumber] = useState(el.number);
const dispatch = useDispatch()

let handelSubmit=(e)=>{
e.preventDefault()
dispatch(editUser(name,email,number,el._id))
dispatch(getUsers())
closeModal()

}

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
              <button style={{backgroundColor:"rgb(100, 15, 67)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={openModal}>Edit User</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form onSubmit={handelSubmit}>
              <label style={{color:"white"}}>Name</label>
              <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
              <label style={{color:"white"}}>Email</label>
              <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
              <label style={{color:"white"}}>Number</label>
              <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
              <button style={{backgroundColor:"rgb(15, 62, 119)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} type="submit">Save</button><button style={{backgroundColor:"rgb(15, 62, 119)",color:"white", width: "100px",height: "40px", margin: "15px",borderRadius:"4px"}} onClick={closeModal}>Cancel</button>
          </form>
      </Modal>
        </div>
    )
}

export default EditUser
