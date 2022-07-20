import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useCallback } from "react";

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

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={required} onChange={handleSwitch} />}
        label="Required"
      />
    </FormGroup>
  );
}
