import '../CSS/TodoRightSideCss.css'

const TodoRightSide = ({todos}) => {
  return (
    <div>
      <div className="rs-container">
        <h3>Tasks</h3>
        <ol className="tasks">
          {todos.map((todo, i) => {
            return <div key={i}><li className="ts">{todo}</li>x</div>
          })}
        </ol>
      </div>
    </div>
  )
}

export default TodoRightSide