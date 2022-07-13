import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={dataOptions}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="email" />}
    />
  );
}

const dataOptions = [
  { label: 'email'},
  { label: 'phone number' },
  { label: 'name'},
  { label: 'last name'},
  { label: 'address'}
]
