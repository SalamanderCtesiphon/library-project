import React from 'react'

function BookCard({ item, handleDelete, toggleReadStatus }) {
  return (
    <>
      <div className="book-card">
        <h2>{item.title}</h2>
        <div>{item.author}</div>
        <div>{item.pages} pgs.</div>
        <div>Have read? {item.have_read}.</div>
        <button onClick={() => toggleReadStatus(item.id)}>
          toggle read status
        </button>
        <button onClick={() => handleDelete(item.id)}>delete</button>
      </div>
    </>
  )
}

export default BookCard
