import './App.css'
import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Header from './components/Header'
import BookCard from './components/BookCard'
import IntroModal from './components/IntroModal'

function App() {
  const [open, setOpen] = React.useState(false)
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
    handleClose()
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
          item.have_read = 'no'
        } else {
          item.have_read = 'yes'
        }
      }
      setMyLibrary([...myLibrary])
    })
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    //console.log(myLibrary)
  }, [myLibrary])

  return (
    <>
      <IntroModal />
      <Header
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        pages={pages}
        setPages={setPages}
        have_read={have_read}
        setHave_read={setHave_read}
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <div className="container">
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
      </div>
    </>
  )
}

export default App
