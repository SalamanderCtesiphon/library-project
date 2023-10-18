function BookForm({
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
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
      </form>
    </section>
  )
}

export default BookForm
