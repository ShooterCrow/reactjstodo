import { useRef } from 'react'
import '../CSS/TodoRightSideCss.css'
import InputSubmit from './inputSubmit'

const TodoRightSide = ({ setTodos, todos, deleteTodo, addToImportant, edit, fieldValue, currentNote }) => {
  const todoDiv = useRef(null)
  const update = (e) => {
    console.log(fieldValue, edit)
    todos.splice(currentNote.id,1)

    todos.unshift(e.target.parentElement.children[0].value)
    localStorage.setItem("todos", JSON.stringify(todos))
    setTodos(JSON.parse(localStorage.getItem("todos")))
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
          submit={update}
        />
      </div>
    </div>
  )
}

export default TodoRightSide