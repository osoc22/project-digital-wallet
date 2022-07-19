import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState, useCallback, ChangeEvent } from "react";

export default function SwitchLabels({
  required,
  toggleRequired,
}: {
  required: boolean;
  toggleRequired: () => void;
}) {
  const handleSwitch = useCallback(() => {
    toggleRequired();
  }, [toggleRequired]);

  /* const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Checked: " + (event.target as HTMLInputElement).checked);
  }; */

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={required} onChange={handleSwitch} />}
        label="Required"
      />
    </FormGroup>
  );
}
