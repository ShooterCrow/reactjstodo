import { useEffect, useRef, useState } from 'react'
import '../Components/CSS/Info.css'

const Info = ({ todos, displayPop, infoRef, infoTitle, infoDetails, popControl }) => {

  // const [sp, setSp] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)

  infoRef = useRef(null)

  const lastTodoAdded = () => {
    return todos.length===0 ? "No Tasks Was Set" : (todos[todos.length - 1])
  }
  
  // useEffect(() => {
  //   !
  // })

  useEffect(() => {
    if (firstLoad) {
      displayPop(infoRef.current)
    } else {
      setFirstLoad(false)
      return
    }
  }, [todos, popControl])

  return (
    <div ref={infoRef} className='info-container'>
      <h4> {infoTitle} </h4>
      <p> {infoDetails} </p>
    </div>
  )
}

export default Info