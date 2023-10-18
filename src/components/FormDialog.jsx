import * as React from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { Box } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: '#242424',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'rgba(255, 255, 255, 0.87)',
  display: 'flex',
  justifyContent: 'center',
}

export default function BasicModal({
  handleSubmit,
  title,
  setTitle,
  author,
  setAuthor,
  pages,
  setPages,
  have_read,
  setHave_read,
  open,
  setOpen,
  handleOpen,
  handleClose,
}) {
  return (
    <div className="modal">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
