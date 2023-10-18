import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a Book
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Book</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Book Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="author"
            label="Book Author"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="pages"
            label="Number of pages"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="have_read"
            label="Have you read this book?"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Book</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
