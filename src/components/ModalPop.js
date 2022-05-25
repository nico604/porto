import React, { useState,  } from 'react';
//import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
//import styled from "styled-components";
import Login from  "./Login/Login";


export default function ModalPop(props){
  
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  function handleSubmit(event) {
   event.preventDefault();
   console.log("event close");
   handleClose();
  }

  return(
    <React.Fragment>
      <Modal isOpen={open}  toggle={() => setOpen(true)}  >
        <ModalHeader>
          Biennvenue
        </ModalHeader>
      
        <ModalBody>
        <Login onSubmit={handleSubmit} />
        </ModalBody>
      
       <ModalFooter>
        <Button variant="secondary" onClick={handleClose}>
        Close Modal
        </Button>
        </ModalFooter> 

      </Modal>
       <Button variant="primary" onClick={handleShow}>
          Launch Form modal
        </Button>
       
    </React.Fragment>
  )
}
  

