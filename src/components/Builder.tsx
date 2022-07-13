// import {Book} from '@mui/icons-material/book';
// import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import TextField from './TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BuilderHelper from './BuilderHelper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from '@mui/material/Button';

export default function ProcedureDesign() {
  return (
    <div className="builder-container">
      <div className="builder-sidebar">
        <Button className="builder-item"><LocalLibraryOutlinedIcon /></Button>
        <Button className="builder-item"><SettingsOutlinedIcon /></Button>
      </div>
      <div className="builder-main">
        <div className='builder-title-section'>
          <h1>Contact Details</h1>
        </div>
        <div className='builder-component-section'>
          <Box sx={{width:'35%',border:1, marginBottom:'30px'}}>
            <TextField />
          </Box>
          <Box sx={{width:'35%',border:1, marginBottom:'30px'}}>
            <TextField />
          </Box>
          <Box sx={{width:'35%',border:1, marginBottom:'30px'}}>
            <TextField />
          </Box>
        </div>
        <Box sx={{display:'flex', justifyContent:'center'}}>
          <Button>
            <AddCircleOutlineIcon sx={{width:'60px'}} />
          </Button>
        </Box>
      </div>
      <div className="builder-helper">
        <Container>
          <Box>
            <BuilderHelper />
          </Box>
        </Container>
      </div>
    </div>
  )}
