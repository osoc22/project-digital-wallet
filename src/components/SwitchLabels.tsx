import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState, useCallback, ChangeEvent } from "react";

export default function SwitchLabels() {
  const [switchChecked, changeSwitchState] = useState(false);
  const handleSwitch = useCallback(() => {changeSwitchState(!switchChecked)}, [switchChecked]);

  /* const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Checked: " + (event.target as HTMLInputElement).checked);
  }; */

  return (
    <FormGroup>
      <FormControlLabel control={<Switch checked={switchChecked} onChange={handleSwitch} />} label="Required" />
    </FormGroup>
  );
}
