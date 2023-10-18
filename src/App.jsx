import './App.css'
import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Header from './components/Header'
import BookForm from './components/BookForm'
import BookCard from './components/BookCard'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState('')
  const [have_read, setHave_read] = useState('')
  const [book, setBook] = useState(null)
  const [id, setId] = useState(uuid())
  const [myLibrary, setMyLibrary] = useState([
    {
      id: '1',
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      pages: '542',
      have_read: 'yes',
    },
    {
      id: '2',
      title: 'The Hobbit',
      author: 'J. R. R. Tolkien',
      pages: '305',
      have_read: 'yes',
    },
    {
      id: '3',
      title: 'Don Quixote',
      author: 'Miguel DeCervantes',
      pages: '1034',
      have_read: 'yes',
    },
  ])

  function handleSubmit(e) {
    e.preventDefault()
    if (title === '' || author === '' || pages === '' || have_read === '') {
      alert('Please fill out form completely')
      return
    }
    setShowForm(false)
    setId(uuid())
    setBook({
      id,
      title,
      author,
      pages,
      have_read,
    })
    setMyLibrary([...myLibrary, { id, title, author, pages, have_read }])
    setTitle('')
    setAuthor('')
    setPages('')
    setHave_read('')
  }

  function handleDelete(id) {
    setMyLibrary(myLibrary.filter((item) => item.id !== id))
  }

  function toggleReadStatus(id) {
    myLibrary.map((item) => {
      if (item.id === id) {
        if (item.have_read === 'yes') {
          setHave_read('no')
        } else {
          setHave_read('yes')
        }
        return item
      }
      setMyLibrary([...myLibrary, item])
    })
  }

  function showBook() {
    setShowForm(true)
  }

  function closeForm() {
    setShowForm(false)
  }

  useEffect(() => {
    //console.log(myLibrary)
  }, [myLibrary])

  return (
    <>
      <Header />
      <div className="form-holder">
        {showForm === false ? (
          <button onClick={showBook}>Add A Book</button>
        ) : (
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
            closeForm={closeForm}
          />
        )}
      </div>
      {myLibrary.length === 0 ? (
        <h2 id="no-books">There are No Books in Your Library.</h2>
      ) : (
        <section className="library-display">
          {myLibrary.map((item) => (
            <BookCard
              item={item}
              key={item.id}
              handleDelete={handleDelete}
              toggleReadStatus={toggleReadStatus}
            />
          ))}
        </section>
      )}
    </>
  )
}

export default App
