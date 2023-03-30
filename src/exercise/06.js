// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // Def with event
  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     onSubmitUsername(event.target.elements[0].value)
  //   }

  const handleSubmit = () => {
    if (inputRef.current.value) {
      onSubmitUsername(inputValue)
    }
  }

  // ref for the input
  const inputRef = useRef('')

  // useState to mantain the value
  const [inputValue, setInputValue] = useState('')

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          ref={inputRef}
          value={inputValue}
          type="text"
          onChange={() => setInputValue(inputRef.current.value.toLowerCase())} // to have always lower case in the input
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
