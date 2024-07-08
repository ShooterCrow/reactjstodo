import { useRef, useState, useEffect } from 'react'
import InputSubmit from "../TodoComponents/inputSubmit"
import '../CSS/TodoLeftSideCss.css'

let data
const TodoLeftSide = ({ todos, setTodos, updateInfo, popControl, setPopControl, importantNotes, setImportantNotes }) => {
  const [userName, setUserName] = useState("Username")
  let noteInputRef = useRef(null)

  const submit = (e) => {
    if (!(e.target.parentElement.children[0].value)) return
    setTodos([...todos, e.target.parentElement.children[0].value])
    updateInfo(e.target.parentElement.children[0].value, 1)
    e.target.parentElement.children[0].value = ""
    console.log(e.target.parentElement.children[0].value)
  }

  const addUserName = (e) => {
    if (e.target.parentElement.children[0].value) {
      setUserName(e.target.parentElement.children[0].value + "'s")
      localStorage.setItem("username", e.target.parentElement.children[0].value)
      setPopControl(!popControl)
      updateInfo(`Username updated to ${e.target.parentElement.children[0].value}`)
      e.target.parentElement.children[0].value = ""
    } else if (!e.target.parentElement.children[0].value) {
      setPopControl(!popControl)
      updateInfo("Username not updated")
    }
    e.target.parentElement.classList.toggle("nodisplay")
    e.target.parentElement.parentElement.children[1].classList.remove("nodisplay")
  }

  const sectionDisplay = (e) => {
    e.target.classList.toggle("nodisplay")
    e.target.parentElement.children[0].classList.toggle("nodisplay")
  }

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos((JSON.parse(localStorage.getItem("todos"))))
    }
    if (!localStorage.getItem("username")) return
    setUserName(localStorage.getItem("username") + "'s")
  }, [])

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos))
    } else return
  }, [todos])

  return (
    <div className="ls-container">
      <div className="justspace">
        <div className="title-bloc">
          <h3>{userName} Notes</h3>
        </div>
        <div className="input-some-info">
          <div className="input-submit"></div>
          <InputSubmit
            placeHolder={"Insert Task..."}
            submit={submit}
            classer={"input-submit"}
            innerText={"Submit"}
            
          />
          <div className="completed-tasks">
            {importantNotes.length === 0 ? <h4>No Notes Added to Important</h4> : <h4>Important Notes</h4>}
            <ol>
              {importantNotes.map((x, i) => {
                return <li
                key={i}
                id={i}
                >{x}</li>
              })}
              {/* <li>{importantNotes} </li>
              <li>Learn React</li>
              <li>Learn Node.js</li>
              <li>Build Self Driving Car</li> */}
            </ol>
            <div className="updateUName">
              <InputSubmit
                placeHolder={"Enter Username..."}
                submit={addUserName}
                classer={"nodisplay"}
                innerText={"Submit / Hide"}
              />
              {/* <div className="uNameInput_Button"></div> */}
              <button onClick={sectionDisplay} className="sectionDisplayBtn">
                {userName === "Username" ? "Add Username" : "Update Username"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoLeftSide