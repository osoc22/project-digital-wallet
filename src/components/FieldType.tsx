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
  type,
}: {
  updateFieldType: (type: string) => void;
  type: string;
}) {
  console.log(type);
  const handleInputChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      updateFieldType(event.target.value);
    },
    [updateFieldType]
  );

  return (
    <FormControl fullWidth>
      <InputLabel>Type</InputLabel>
      <Select value={type} label="Type" onChange={handleInputChange}>
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
