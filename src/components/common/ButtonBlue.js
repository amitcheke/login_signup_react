import React from 'react';
import './css/common.css';


const ButtonBlue = (props) => {
    let { handleClick, label } = props;
    return (
        <>
            <button onClick={handleClick} className="btn-blue">{label}</button>
        </>
    );
}

export default ButtonBlue;