// import {Book} from '@mui/icons-material/book';
// import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BuilderHelper from './BuilderHelper';
import FieldsLibrary from './FieldsLibrary';
import Button from '@mui/material/Button';
import BuilderMainContainer from './BuilderMainContainer';

export default function ProcedureDesign() {
  return (
    <div className="builder-container">
      <div className="builder-sidebar">
        <FieldsLibrary />
      </div>
      <div className="builder-main">
        <div className='builder-component-section'>
          <BuilderMainContainer />
        </div>
        <Box sx={{display:'flex', justifyContent:'center'}}>
          <Button variant='contained' color='primary' size='large'>+ Create new field</Button>
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
