import React, { useState } from 'react'

function InputForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState('')
  const [have_read, setHave_read] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <h3>Input Book Details</h3>
          <label htmlFor="title">
            Book Title:
            <br />
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>

          <label htmlFor="author">
            Book Author:
            <br />
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
          </label>

          <label htmlFor="pages">
            Number of Pages:{' '}
            <input
              type="text"
              id="pages"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            ></input>
          </label>

          <label htmlFor="have_read">
            Have you read this book:{' '}
            <input
              type="text"
              id="have_read"
              value={have_read}
              onChange={(e) => setHave_read(e.target.value)}
            ></input>
          </label>

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default InputForm
