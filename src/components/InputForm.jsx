import React from 'react'

function InputForm() {
  return (
    <>
      <section>
        <form>
          <h3>Input Book Details</h3>
          <label for="title">
            Book Title:
            <br />
            <input type="text" id="title"></input>
          </label>

          <label for="author">
            Book Author:
            <br />
            <input type="text" id="author"></input>
          </label>

          <label for="pages">
            Number of Pages: <input type="text" id="pages"></input>
          </label>

          <label for="have_read">
            Have you read this book: <input type="text" id="have_read"></input>
          </label>

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default InputForm
