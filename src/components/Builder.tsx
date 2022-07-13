// import {Book} from '@mui/icons-material/book';
// import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import TextField from './TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BuilderHelper from './BuilderHelper';


export default function ProcedureDesign() {
  return (
    <div className="builder-container">
      <div className="builder-sidebar">
        <span className="builder-item">item1</span>
        <span className="builder-item">item2</span>
        <span className="builder-item">item3</span>
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
