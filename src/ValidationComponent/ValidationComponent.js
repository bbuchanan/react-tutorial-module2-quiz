import React from 'react'

const validationComponent = (props) => {
  return (
    <div>
      <p>{props.length}</p>
      {props.length > 5 ? <p>Text long enough</p> : <p>Text too short</p>}
    </div>
  )
}

export default validationComponent