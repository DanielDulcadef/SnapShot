import React from 'react'

function SearchPhotos({ search1 }) {

  function imput(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      search1(e.target.value)
    }
  }
  return (
    <form className='form'>
      <label className="label" >
      </label>
      <input
        onKeyDown={imput}
        type="text"
        className="input"
        placeholder={"Search..."}
      />
    </form>
  )
}
export default SearchPhotos