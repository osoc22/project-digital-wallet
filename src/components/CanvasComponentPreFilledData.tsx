import DefaultComponentsContactDetails from './DefaultComponentsContactDetails';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';

export default function ComponentPrefilledData() {
  const navigate = useNavigate();

  return (
    <Box sx={{marginRight:'50px', width:'350px', minHeight:'265px', backgroundColor:'#f5f5f5', border:'1px solid gray'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', border:'1px solid gray'}}>
        <h5 style={{marginLeft:'15px'}}>Pre-filled citizen data</h5>
        <Box sx={{display: 'flex', alignItems:'center'}}>
          <IconButton onClick={() => {navigate('/builder')}}>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </Box>
      <Box >
        <DefaultComponentsContactDetails />
      </Box>
    </Box>
  )}
