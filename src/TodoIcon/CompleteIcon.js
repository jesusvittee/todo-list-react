import React from "react";
import {TodoIcon} from '.'

function CompleteIcon({completed, onComplet}){
    return (<TodoIcon type="check"
    color={completed ? 'red' : "gray"}
    onClick={onComplet}
    />);
}

export { CompleteIcon }