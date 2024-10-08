import TodoLeftSide from './TodoLeftSide'
import TodoRightSide from './TodoRightSide'
import '../CSS/Todo.css'
import { useEffect, useState } from 'react'

const Todo = ({todos, setTodos, deleteTodo, updateInfo, addToImportant, popControl, setPopControl, importantNotes, setImportantNotes, edit, fieldValue, currentNote }) => {
  
  return (
    <div className='todo-container'>
      <TodoLeftSide
        todos={todos}
        setTodos={setTodos}
        updateInfo={updateInfo}
        popControl={popControl}
        setPopControl={setPopControl}
        importantNotes={importantNotes}
        setImportantNotes={setImportantNotes}
      />
      <TodoRightSide
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        addToImportant={addToImportant}
        importantNotes={importantNotes}
        setImportantNotes={setImportantNotes}
        edit={edit}
        fieldValue={fieldValue}
        currentNote={currentNote}
      />
    </div>
  )
}

export default Todo