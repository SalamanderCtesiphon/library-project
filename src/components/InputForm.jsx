import React from 'react'

function InputForm() {
  return (
    <>
      <section>
        <form>
          <h3>Input Book Details</h3>
          <label for="title">Title:</label>
          <input type="text" id="title"></input>
          <label for="author">Author:</label>
          <input type="text" id="author"></input>
          <label for="pages">Number of Pages:</label>
          <input type="text" id="pages"></input>
          <label for="have_read">Have you read this book:</label>
          <input type="text" id="have_read"></input>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default InputForm
