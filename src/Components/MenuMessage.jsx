import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { ModalEditChannel } from './ModalEditChannel';
import { ModalEliminar } from './ModalEliminar';
import menuMessage from '../images/menu.png';

export const MenuMessage = ({idChannel, nameChannel }) => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);


  return (
    <div>
         <Dropdown>
                     <Dropdown.Toggle className='menuMessage' variant="success" id="dropdown-basic">
                        <img className='menuMessageImg' alt='img de menú' src={menuMessage} />                  
                     </Dropdown.Toggle>
               
                     <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" onClick={handleShowEdit} >Editar</Dropdown.Item>
                      <Dropdown.Item href="#/action-2"  onClick={handleShow}>Eliminar</Dropdown.Item>
                     </Dropdown.Menu>
        </Dropdown> 
        <ModalEliminar 
          show={show} 
          handleClose={handleClose} 
          idChannel = {idChannel} 
          nameChannel = {nameChannel} 
        />
        <ModalEditChannel
           showEdit={showEdit} 
           handleCloseEdit={handleCloseEdit} 
           idChannel = {idChannel} 
           nameChannel = {nameChannel} 
        />
      
    </div>
  )
}
