import "./CSS/TodoItems.css"
import cross from "../Components/Assets/X-icon.png"
import circle from "../Components/Assets/O-icon.png"

let data
const TodoItems = ({ no, setTodos, done, text, todos, id }) => {

  const todoDone = (e) => {
    todos[e.target.parentElement.parentElement.id].done = !todos[e.target.parentElement.parentElement.id].done
    localStorage.setItem("todos", JSON.stringify(todos))
    data = JSON.parse(localStorage.getItem("todos"))
    setTodos(data)
  }

  const deleteTodo = (e) => {
    todos.splice(e.target.parentElement.id, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
    data = JSON.parse(localStorage.getItem("todos"))
    setTodos(data)
  }

  return (
    <div className="todoitems">
      <div className="main-container" id={id}>
        <div onDoubleClick={todoDone}  className="todo-container">
          <img src={circle} alt="" className={done === false ? "circle" : "circle done"} />
          <div className={done === false ? "todoitems-text" : "todoitems-text line"}> {text} </div>
        </div>
        <img onClick={deleteTodo} src={cross} width={20} alt="" />
      </div>
    </div>
  )
}
export default TodoItems