import Info from './Components/Info'
import Todo from './Components/TodoComponents/Todo'
import './App.css';
import { useState } from 'react';

let display = false
let justDeletedTodo
const App = () => {
  const [todos, setTodos] = useState([])
  const [infoTitle, setInfoTitle] = useState("Welcome")
  const [infoDetails, setInfoDetails] = useState("")
  const [popControl, setPopControl] = useState(false)
  const [importantNotes, setImportantNotes] = useState([])
  const [fieldValue, setFieldValue] = useState("")

  const addToImportant = (e) => {
    if (importantNotes.includes(e.target.innerText)) {
      let rest = importantNotes.filter((x)=> x!==e.target.innerText)
      setImportantNotes(rest)
    } else if (!importantNotes.includes(e.target.innerText)) {
      setImportantNotes([...importantNotes, e.target.innerText])
    }
    e.target.classList.toggle("done")
    updateInfo(e.target.innerText, 2)
    setPopControl(!popControl)
  }

  const edit = (e) => {
    let editInput = e.target.parentElement.parentElement.parentElement.children[2]
    setFieldValue(e.target.innerText)
    console.log(editInput.classList)
    // if (!editInput.classList.includes("nodisplay"))
    editInput.classList.toggle("nodisplay")
  }


  const updateInfo = (data, status) => {
    if (status === 0) {
      setInfoTitle("Deleted Task:")
      setInfoDetails(data[0])
      return
    }
    if (status === 1) {
      setInfoTitle("Added Task:")
      setInfoDetails(data)
      return
    }
    if (status === 2) {
      setInfoTitle("Added to Important:")
      setInfoDetails(data)
      return
    }
    if (!status) {
      setInfoTitle("Info:")
      setInfoDetails(data)
    }
  }

  const deleteTodo = (e) => {
    justDeletedTodo = todos.splice(e.target.parentElement.id, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
    setTodos(JSON.parse(localStorage.getItem("todos")))
    updateInfo(justDeletedTodo, 0)
  }
  
  const displayPop = (e) => {
    e.classList.remove("nodisplay")
    setTimeout(() => {
      e.classList.add("nodisplay")
    }, 5000);
  }

  return (
    <div>
      <div className="app-container">
        <Todo
          displayPop={displayPop}
          todos={todos}
          setTodos={setTodos}
          deleteTodo={deleteTodo}
          updateInfo={updateInfo}
          addToImportant={addToImportant}
          popControl={popControl}
          setPopControl={setPopControl}
          importantNotes={importantNotes}
          setImportantNotes={setImportantNotes}
          edit={edit}
          fieldValue={fieldValue}
        />
        <Info
          displayPop={displayPop}
          todos={todos}
          display={display}
          infoTitle={infoTitle}
          infoDetails={infoDetails}
          popControl={popControl}
        />
      </div>
    </div>
  );
}

export default App;
