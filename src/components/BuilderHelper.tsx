import ComboBox from './ComboBox';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ControlledRadioButtonsGroup from './RadioButton';
import SwitchLabels from './SwitchLabels';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function BuilderHelper() {
  return (
    <Container  sx={{marginTop:'195px', backgroundColor: '#d3d3d3'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', py: 2 }}>
        <ComboBox />
        <ComboBox />
        <div>
          <ControlledRadioButtonsGroup />
        </div>
        <div className='builder-helper-footer'>
          <SwitchLabels />
          <div className='builder-helper-footer-items'>
            <span><ContentCopyIcon /></span>
            <span><DeleteOutlineIcon /></span>
          </div>
        </div>
      </Box>
    </Container>
  )
}
