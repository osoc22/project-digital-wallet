import DefaultComponentsContactDetails from './DefaultComponentsContactDetails';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ComponentUnfilledData() {
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
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{display:'flex', alignItems: 'center', height:'200px', marginLeft:'50px'}}>
        <Button variant='contained'>+ Add Fields</Button>
      </Box>
    </Box>
  )}
