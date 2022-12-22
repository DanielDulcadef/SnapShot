import React from 'react'

function Buttons({ buttons }) {

  function btns(e) {
    buttons(e.target.value)
  }
  return (
    <div id="but">
      <button className='btn' value={"Mountain"} onClick={btns}>Mountain</button>
      <button className='btn' value={"Beaches"} onClick={btns}>Beaches</button>
      <button className='btn' value={"Birds"} onClick={btns}>Birds</button>
      <button className='btn' value={"Food"} onClick={btns}>Food</button>
    </div>
  )
}
export default Buttons

