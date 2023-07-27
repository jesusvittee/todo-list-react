import React from 'react'
import { Loading } from '../TodoIcon/Loanding'
import './TodoLoading.css'
// import { AiOutlineLoading } from "react-icons/ai";

function TodosLoading(props) {
  return (
    <div className='center-loading'>
      <Loading loading={props.loading} className="rotar-img"/>
    </div>
  )
}

export { TodosLoading}


