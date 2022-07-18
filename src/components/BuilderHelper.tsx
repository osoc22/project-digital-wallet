import BuilderHelperFieldTypes from './BuilderHelperFieldTypes';
import Box from '@mui/material/Box';
import SwitchLabels from './SwitchLabels';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function BuilderHelper() {
  return (
      <Box sx={{display: 'flex', flexDirection: 'column', py: 2 }}>
        <h2>Field Details</h2>
        <h5>Field types</h5>
        <BuilderHelperFieldTypes />
        <div className='builder-helper-footer'>
          <SwitchLabels />
          <SwitchLabels />
          <SwitchLabels />
        </div>
      </Box>
  )
}
