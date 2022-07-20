import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputBox from "./InputBox";

export default function BuilderMainContainer() {
  return (
    <Container maxWidth='sm' style={{ display: 'flex', flexDirection: 'column', height: '450px', marginTop:'150px' }}>
      <Box sx={{width:'100%',border:1, marginBottom:'30px', py:2}}>
        <InputBox />
      </Box>
      <Box sx={{width:'100%',border:1, marginBottom:'30px', py:2}}>
        <InputBox />
      </Box>
      <Box sx={{width:'100%',border:1, marginBottom:'30px', py:2}}>
        <InputBox />
      </Box>
    </Container>
  )
}
