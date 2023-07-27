import './TodoHeader.css'
function TodoHeader({ children }) {
  return (
    <div className='TodoHeader'>
        {children}
    </div>
  )
}

export {TodoHeader};