import { useEffect, useRef, useState } from "react"
import TodoItems from "./TodoItems"
import Info from './info'
import "./CSS/Todo.css"

let count = 0
let data
const Todo = () => {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)
  const info = useRef(null)
  const addToList = () => {
    if (inputRef.current.value) {
      setTodos([...todos, { no: count++, text: inputRef.current.value, done: false }])
      inputRef.current.value = ""
      localStorage.setItem("todosCcount", count)
    }
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")))
    count = JSON.parse(localStorage.getItem("todosCcount"))
  }, [])

  useEffect(() => {
    setTimeout(()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
      localStorage.setItem("todosCcount", JSON.stringify(count))
    }, 100)
  }, [todos])


  return (
    <div className="todo">
      <div className="todo-nav">Todo List
        <div className="todo-add">
          <input className="todo-input" type="text" placeholder="Add Your Task" ref={inputRef} />
          <div onClick={addToList} className="todo-add-btn">Add</div>
        </div>
        <div className="todo-list-items">
          {todos.map((todo, i) => {
            return <TodoItems
              no={todo.no}
              done={todo.done}
              text={todo.text}
              key={i}
              id={i}
              todos={todos}
              setTodos={setTodos}
            />
          })}
        </div>
      </div>
      <Info />
    </div>
  )
}

export default Todo