import { FormControl, Select, MenuItem, SelectChangeEvent, InputLabel } from "@mui/material";
import { useCallback } from "react";

export default function BuilderHelperFieldTypes({
  updateFieldType,
  field,
}: {
  updateFieldType: (type: object) => void;
  field: { format: string; type: string };
}) {
  const handleInputChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      const type = valueMap[event.target.value] ?? { type: event.target.value };
      updateFieldType(type);
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

const valueMap: { [key: string]: any } = {
  email: { type: "string", format: "email" },
  "date-time": { type: "string", format: "date-time" },
};

const dataOptions = [
  { name: "Email", value: "email" },
  { name: "DateTime", value: "date-time" },
  { name: "Number", value: "integer" },
  { name: "Text", value: "string" },
];
