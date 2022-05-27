import React, { useState,  } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Login from  "./Login/Login";


export default function ModalPop(props){
  
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    const nom = form.elements.user.value
    if (nom === "Nicolas"){
      console.log(nom);
      handleClose();
  }
}
  const allo = (e) => {
  }

  return(
    <React.Fragment>
      <Modal isOpen={open}  toggle={() => setOpen(true)}  >
        <ModalHeader>
          Biennvenue
        </ModalHeader>
      
        <ModalBody>
          <Login onSubmit={onLoginSubmit} />
        </ModalBody>
      
       <ModalFooter>
        <Button variant="secondary" onClick={allo}>
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
  

