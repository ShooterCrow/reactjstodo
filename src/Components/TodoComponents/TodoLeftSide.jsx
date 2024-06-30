import { useRef, useState, useEffect } from 'react'
import '../CSS/TodoLeftSideCss.css'

let data
const TodoLeftSide = ({todos, setTodos}) => {
  let inputRef = useRef(null)
  const submit = () => {
    // if (!(inputRef.current.value)) return
    // setTodos([...todos, inputRef.current.value])
    localStorage.setItem("todos", inputRef.current.value)
    inputRef.current.value = ""
  }
  
  useEffect(()=> {
    if (!localStorage.getItem("todos")) {
      // localStorage.setItem("todos", todos)
    }
    if (localStorage.getItem("todos")) {
      // setTodos((localStorage.getItem("todos")))
      console.log(todos, 21)
    }
    // setTodos((localStorage.getItem("todos")))
  }, [])
  
  useEffect(()=> {
    if (!localStorage.getItem("todos")) return
    data = localStorage.getItem("todos")
    console.table(data)
    // setTodos((localStorage.getItem("todos")))
  }, [todos])

  return (
    <div className="ls-container">
      <div className="justspace">
        <div className="title-bloc">
          <h3>UserName's Todo</h3> 
        </div>
        <div className="input-some-info">
          <div className="input-submit">
            <input type="text" ref={inputRef} placeholder="Insert Task..." />
            <button onClick={submit} className="submit">Submit</button>
          </div>
          <div className="completed-tasks">
            <h4>Last 3 Completed Tasks</h4>
            <ol>
              <li>Learn React</li>
              <li>Learn Node.js</li>
              <li>Build Self Driving Car</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoLeftSide