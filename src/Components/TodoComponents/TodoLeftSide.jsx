import { useRef, useState } from 'react'
import '../CSS/TodoLeftSideCss.css'

const TodoLeftSide = ({todos, setTodos}) => {
  let inputRef = useRef(null)
  const submit = () => {
    if (!(inputRef.current.value)) return
    setTodos([...todos, inputRef.current.value])
    inputRef.current.value = ""
  }

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