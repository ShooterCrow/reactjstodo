import React from 'react'

const InputSubmit = ({submit, placeHolder, classer, value, innerText}) => {
  return (
    <div className={classer}>
      <input type="text" defaultValue={value} placeholder={placeHolder} />
      <button onClick={submit} className="submit">{innerText}</button>
    </div>
  )
}

export default InputSubmit