import React from 'react';
import './css/common.css';


const ButtonGreen = (props) => {
    let { handleClick, label } = props;
    return (
        <>
            <button onClick={handleClick} className="btn-green">{label}</button>
        </>
    );
}

export default ButtonGreen;