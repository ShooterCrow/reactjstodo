import TodoLeftSide from './TodoLeftSide'
import TodoRightSide from './TodoRightSide'
import '../CSS/Todo.css'
import { useEffect, useState } from 'react'

let data
const Todo = () => {
  const [todos, setTodos] = useState([])
  useEffect(()=> {
    // if (!localStorage.getItem("todos")) return
    // setTodos((localStorage.getItem("todos")))
    // data = localStorage.getItem("todos")
    console.log(data, 121)
    // setTodos
  }, [])
  return (
    <div className='todo-container'>
      <TodoLeftSide
        todos={todos}
        setTodos={setTodos}
      />
      <TodoRightSide
        todos={todos}
      />
    </div>
  )
}

export default Todo