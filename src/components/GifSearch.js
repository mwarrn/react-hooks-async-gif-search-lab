import React, { useState } from "react";

function GifSearch({onSearchFormSubmit}) {
    // Create state for controlled form input
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearchFormSubmit(inputValue)
    }
    // Render a controlled form with text input
    // Invoke the callback prop when the form is submitted
        // preventDefault on form submit
         // Pass the value of the form input to the callback

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>What would you like to search for?</label>
            <input type="text" value={inputValue} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default GifSearch;