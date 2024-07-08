import { useRef } from 'react'
import '../CSS/TodoRightSideCss.css'
import InputSubmit from './inputSubmit'

const TodoRightSide = ({ todos, deleteTodo, addToImportant, edit, fieldValue }) => {
  const todoDiv = useRef(null)
  const update = () => {
    console.log(500333)
  }
  return (
    <div>
      <div className="rs-container">
        <h3>Notes</h3>
        <ol className="tasks">
          {todos.map((todo, i) => {
            return <div ref={todoDiv} key={i}>
              <li
                onDoubleClick={addToImportant}
                onClick={edit}
                id={i} 
                className="ts">{todo}
              </li>
              <h4 onClick={deleteTodo}> X </h4>
            </div>
          })}
        </ol>
        <InputSubmit
          placeHolder={"Edit note..."}
          innerText={"Edit"}
          value={fieldValue}
          classer={"nodisplay rsis"}
          update={update}
        />
      </div>
    </div>
  )
}

export default TodoRightSide