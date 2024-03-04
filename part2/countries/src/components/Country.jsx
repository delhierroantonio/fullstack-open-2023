import React from 'react'

const Country = ({ countriesResult, handleShow }) => {
  return (
    <div>
      <span><strong>{countriesResult.name.common}</strong> </span>
      <button onClick={() => handleShow(countriesResult.name.official.toLowerCase())}>Show</button>
    </div>
  )
}

export default Country
