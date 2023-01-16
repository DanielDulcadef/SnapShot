import React from 'react'

function Buttons({ buttons, palabras }) {

  function btns(e) {
    buttons(e.target.value)
  }
  return (
    <div id="but">
      {
        palabras.map(texto => {
          return (
            <button className='btn' value={texto} onClick={btns}>{texto}</button>
          )
        })
      }

    </div>
  )
}
export default Buttons

