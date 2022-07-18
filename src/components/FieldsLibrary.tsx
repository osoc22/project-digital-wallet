import SearchInput from './SearchInput';
// import Button from '@mui/material/Button';
import FieldTypes from './FieldTypes';
import FieldTemplates from './FieldTemplates';
import Box from '@mui/material/Box';

export default function ProcedureDesign() {
  return (
    <div>
      <section>
        <Box sx={{p:0.5,m:0.5}}>
          <h3>Fields Library</h3>
          <SearchInput />
        </Box>
      </section>
      <section>
        <Box sx={{p:0.5,m:0.5}}>
          <FieldTypes />
        </Box>
        <Box sx={{p:0.5,m:0.5}}>
          <FieldTemplates />
        </Box>
      </section>
    </div>
  );
}
