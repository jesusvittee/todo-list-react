import { TfiCheckBox } from "react-icons/tfi";
import { TiDeleteOutline } from "react-icons/ti";

import { AiOutlineLoading } from "react-icons/ai";

import './TodoIcon.css'

const iconTypes = {
    'check':(color) => <TfiCheckBox className="Icon-svg" fill={color}/>,
    'delete':(color) =>  <TiDeleteOutline className="Icon-svg" fill={color}/>,

    'loandig':(color) => <AiOutlineLoading className="Icon-svg__loading" fill={color}/>
}

function TodoIcon({type, color, onClick}){
    return (
        <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
         {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon};