import ComboBox from './ComboBox';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function BuilderHelper() {
  return (
    <Container>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <ComboBox />
      </Box>
    </Container>
  )
}
