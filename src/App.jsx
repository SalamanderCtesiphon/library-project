import './App.css'
import React, { useState } from 'react'
import Header from './components/Header'
import BookForm from './components/BookForm'

function App() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState('')
  const [have_read, setHave_read] = useState('')
  const [book, setBook] = useState(null)
  const [myLibrary, setMyLibrary] = useState([
    {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      pages: '542',
      have_read: 'yes',
    },
    {
      title: 'The Hobbit',
      author: 'J. R. R. Tolkien',
      pages: '305',
      have_read: 'yes',
    },
    {
      title: 'Don Quixote',
      author: 'Miguel DeCervantes',
      pages: '1034',
      have_read: 'yes',
    },
  ])

  function handleSubmit(e) {
    e.preventDefault()
    setBook({
      title,
      author,
      pages,
      have_read,
    })
    setMyLibrary([...myLibrary, { title, author, pages, have_read }])
    setTitle('')
    setAuthor('')
    setPages('')
    setHave_read('')
  }

  return (
    <>
      <Header />
      <BookForm
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        pages={pages}
        setPages={setPages}
        have_read={have_read}
        setHave_read={setHave_read}
      />
      <section className="library-display">
        {myLibrary.map((item) => (
          <div className="book-card" key={item.title}>
            <h2>{item.title}</h2>
            <div>{item.author}</div>
            <div>{item.pages} pgs.</div>
            <div>Have read? {item.have_read}.</div>
            <button>toggle read status</button>
            <button>delete</button>
          </div>
        ))}
      </section>
    </>
  )
}

export default App
