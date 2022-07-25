import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { useCallback } from "react";

export default function BuilderHelperFieldTypes({
  updateFieldType,
  field
}: {
  updateFieldType: (type: string) => void;
  field: {format: string; type: string};
}) {
  const handleInputChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      updateFieldType(event.target.value);
    },
    [updateFieldType]
  );

  return (
    <FormControl fullWidth>
      <InputLabel>Type</InputLabel>
      <Select value={field.format ?? field.type} label="Type" onChange={handleInputChange}>
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
  { name: "Number", value: "integer" },
  { name: "Text", value: "string" },
];
