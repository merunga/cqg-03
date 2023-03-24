import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { socket } from './conection';

export const ModalEliminar = ({ show, handleClose, nameChannel, idChannel}) => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
    function OndeleteChannel(){
        axios.delete(`https://chatowl-2l34.onrender.com/channel/${idChannel}`,axiosConfig)
        .then((response) => {
            handleClose();
            socket.emit('removeChannel', idChannel);
        
        })
           .catch(error => {
              console.error(error.message);
           })  
    }
  return (
    <div>
          <>
           
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>¿Estás seguro que quieres eliminar el canal {nameChannel} ? </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={OndeleteChannel}>
                    Eliminar
                </Button>
                </Modal.Footer>
            </Modal>
    </>         
    </div>
  )
}
