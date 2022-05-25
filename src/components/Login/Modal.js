import React, { useState,  } from 'react';
//import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import styled from "styled-components";

const Container = styled.div`
  padding: 3em;
`;

export default function Modal(props){
  
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return(

  <Modal isOpen={props.open}  toggle={() => setOpen(true)} fade={true} >
  
    <ModalHeader>
      Modal title
    </ModalHeader>
    <ModalBody>
    
      
          </div>
        </div>
      </Container>

  </ModalBody>
</Modal>


    
  )
}
  

