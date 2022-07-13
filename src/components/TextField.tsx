import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {width: '100%', display:'flex', flexDirection:'column' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
    </Box>
  );
}
