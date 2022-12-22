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
      <label className="label" htmlFor="query">
        {" "}
        📷
      </label>
      <input
        onKeyDown={imput}
        type="text"
        name="query"
        className="input"
        placeholder={"Search..."}
      />
    </form>
  )
}
export default SearchPhotos