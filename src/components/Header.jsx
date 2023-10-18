import React from 'react'
import FormDialog from './FormDialog'

function Header({
  handleSubmit,
  title,
  setTitle,
  author,
  setAuthor,
  pages,
  setPages,
  have_read,
  setHave_read,
  closeForm,
}) {
  return (
    <>
      <header className="header">
        <h1>The Library</h1>
        <FormDialog
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
      </header>
    </>
  )
}

export default Header
