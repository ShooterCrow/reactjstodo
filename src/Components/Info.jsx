import { useEffect, useRef, useState } from 'react'
import '../Components/CSS/Info.css'

const Info = ({ todos, displayPop, infoRef, infoTitle, infoDetails, popControl }) => {

  infoRef = useRef(null)

  const lastTodoAdded = () => {
    return todos.length===0 ? "No Tasks Was Set" : (todos[todos.length - 1])
  }

  useEffect(() => {
    displayPop(infoRef.current)
  }, [todos, popControl])

  return (
    <div ref={infoRef} className='info-container'>
      <h4> {infoTitle} </h4>
      <p> {infoDetails} </p>
    </div>
  )
}

export default Info