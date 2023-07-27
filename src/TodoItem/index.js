import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon 
      completed={props.completed}
      onComplet={props.onComplete}
      />
      {/* <span className={
        `Icon Icon-check 
        ${props.completed && 
          "Icon-check--active"}`}
         
        >
        o
      </span> */}

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon
      onDelete={props.onDelete}
      />
      {/* <span className="Icon Icon-delete"     onClick={props.onDelete}>
        X
      </span> */}
    </li>
  );
}


export { TodoItem };