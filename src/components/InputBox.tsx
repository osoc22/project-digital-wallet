import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { pl:1.8, mx:'auto', width: '95%'},
      }}
      noValidate
      autoComplete="off"
    >
      <p style={{marginBottom:-1}}>E-mail address</p>
      <TextField id="outlined-basic" label="" variant="outlined" size='small' />
    </Box>
  );
}
