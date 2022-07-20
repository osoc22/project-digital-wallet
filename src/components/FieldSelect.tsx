import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useCallback } from "react";

export default function FieldSelect({
  updateFieldType,
  type,
}: {
  updateFieldType: (type: string) => void;
  type: string;
}) {
  const handleInputChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      updateFieldType(event.target.value);
    },
    [updateFieldType]
  );

  return (
    <FormControl fullWidth>
      <InputLabel>Fieldtype</InputLabel>
      <Select value={type} label="Fieldtype" onChange={handleInputChange}>
        {dataOptions.map((o, i) => (
          <MenuItem key={i} value={o.value}>
            {o.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const dataOptions = [
  { name: "Email", value: "email" },
  { name: "Phone number", value: "integer" },
  { name: "Name", value: "string" },
  { name: "Last name", value: "string" },
  { name: "Address", value: "string" },
  { name: "Short text input", value: "string" },
];
