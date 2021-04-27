import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import "./Buttons.css";

const Buttons = ({getRandomAll, createPerson, clearAll}) => 
{
    return (
        <div className="Block">
            <p className="edit">
                <button className="generic" type="button" onClick={(e) => getRandomAll()} >Random</button>
                <span className="space"></span>
                <button className="clear" onClick={(e) => clearAll()} ><FontAwesomeIcon icon={faTrashAlt}/></button>
            </p>
            <p className="Block">
                <button className="generic" onClick={(e) => createPerson()} >Confirm</button>
            </p>
        </div>
        
    );
};

export default Buttons;