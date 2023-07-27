import React from "react";
import { TodoIcon } from ".";


function Loading({loading}){
    return (<TodoIcon type='loandig' color="blue"
    onload={loading}
    />);
}

export { Loading }