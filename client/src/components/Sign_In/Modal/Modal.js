import React from 'react';
import Backdrop from './Backdrop';

const modal = (props) => (
    <div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className='modal'
            style={{
                transform: props.show ? 'translate(-50%, -50%)' : 'translate(-50%, -200%)',
                opacity: props.show ? '1' : '0'
            }}
            >
            {props.children}
        </div>
    </div>
);

export default modal;