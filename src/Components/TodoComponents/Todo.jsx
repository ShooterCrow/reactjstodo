import TodoLeftSide from './TodoLeftSide'
import TodoRightSide from './TodoRightSide'
import '../CSS/Todo.css'
import { useEffect, useState } from 'react'

let data
const Todo = () => {
  const [todos, setTodos] = useState([])
  useEffect(()=> {
    localStorage.setItem("todos", todos)
    data = localStorage.getItem("todos")
    // setTodos
  }, [todos])
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