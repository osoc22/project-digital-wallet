import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Option 1"
      />
      <FormControlLabel control={<Checkbox />} label="Option 2" />
      <FormControlLabel control={<Checkbox />} label="Option 3" />
    </FormGroup>
  );
}
