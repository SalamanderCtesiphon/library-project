import React from 'react'

function BookCard({ item, handleDelete }) {
  return (
    <>
      <div className="book-card">
        <h2>{item.title}</h2>
        <div>{item.author}</div>
        <div>{item.pages} pgs.</div>
        <div>Have read? {item.have_read}.</div>
        <button>toggle read status</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  )
}

export default BookCard
