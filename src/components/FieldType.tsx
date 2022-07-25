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
  datetime: { type: "string", format: "date-time" },
};

const dataOptions = [
  { name: "Email", value: "email" },
  { name: "DateTime", value: "datetime" },
  { name: "Number", value: "string" },
  { name: "Text", value: "string" },
];
