import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function BuilderHelperFieldTypes() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={fieldTypes}
      sx={{ width: 200, marginBottom:'5px' }}
      renderInput={(params) => <TextField {...params} label="email" />}
    />
  );
}

const fieldTypes = [
  { label: 'E-mail adress'},
  { label: 'Short text input'},
  { label: 'Text Area'},
  { label: 'Date'},
  { label: 'Multiple choice'},
  { label: 'Phone' },
  { label: 'Number'},
  { label: 'Select List'},
  { label: 'Radio buttons'},
  { label: 'URL'}
]
