import DefaultComponentsContactDetails from './DefaultComponentsContactDetails';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@mui/material';

export default function ComponentUnfilledData() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={{marginRight:'50px', width:'350px', minHeight:'265px', backgroundColor:'#f5f5f5', border:'1px solid gray'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', border:'1px solid gray'}}>
        <Box sx={{marginLeft:'10px', my:'10px'}}>
          <TextField id="outlined-basic" label="Unnamed component" variant="outlined" size='small' />
        </Box>
        <Box sx={{display: 'flex', alignItems:'center'}}>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon onClick={() => {setOpen(!open)}} />
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Are you sure you want to delete the component &lt;component-name&gt;?
                </Typography>
                <Button variant="outlined" onClick={() => {setOpen(!open)}}>Cancel</Button>
                <Button variant="contained" onClick={() => {setOpen(!open)}}>Delete</Button>
              </Box>
            </Modal>
          </IconButton>
        </Box>
      </Box>
      <Box sx={{display:'flex', alignItems: 'center', height:'200px', marginLeft:'50px'}}>
        <Button variant='contained' onClick={() => {navigate('/builder')}}>+ Add Fields</Button>
      </Box>
    </Box>
  )}
