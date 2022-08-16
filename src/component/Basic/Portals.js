import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from 'react-bootstrap/Button';
import Model from './Model';


function Portals() {
    const [show, setShow] = useState(false);

    return ReactDOM.createPortal(
    <><Button variant="primary" onClick={() => setShow(true)}>
            Custom Width Modal
        
        </Button><Model toShow={show}  toClose ={setShow} /><></></>
    ,document.getElementById('portal-root')
);
}

export default Portals