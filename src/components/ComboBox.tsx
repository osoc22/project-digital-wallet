import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  function handleInputChange(event: any, value: String) {
    console.log(value);
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onInputChange={handleInputChange}
      options={dataOptions}
      sx={{ width: 200, marginBottom:'5px' }}
      renderInput={(params) => <TextField {...params} label="email" />}
    />
  );
}

const dataOptions = [
  { label: 'email'},
  { label: 'phone number' },
  { label: 'name'},
  { label: 'last name'},
  { label: 'address'},
  { label: 'Short text'}
]
