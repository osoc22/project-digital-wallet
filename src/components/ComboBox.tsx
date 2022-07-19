import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({
  updateFieldType,
  type,
}: {
  updateFieldType: (type: string) => void;
  type: string;
}) {
  const [value, setValue] = React.useState("Email");
  const handleInputChange = React.useCallback(
    (_: any, newInput: string | null) => {
      if (newInput == null) return;

      setValue(newInput);
      const name = dataOptions.find((o) => o.value === newInput)?.name;
      if (!name) return;

      updateFieldType(name);
    },
    [updateFieldType]
  );

  return (
    <Autocomplete
      value={value}
      defaultValue={dataOptions.find((o) => o.value === type)?.value}
      disablePortal
      id="combo-box-demo"
      onChange={(event, value) => handleInputChange(event, value)}
      options={dataOptions.map((o) => o.value)}
      sx={{ width: 200, marginBottom: "5px" }}
      renderInput={(params) => <TextField {...params} label="Fieldtype" />}
    />
  );
}

const dataOptions = [
  { name: "Email", value: "Email" },
  { name: "Phone number", value: "Phone number" },
  { name: "Name", value: "Name" },
  { name: "Last name", value: "Last name" },
  { name: "Address", value: "Address" },
  { name: "string", value: "Short text input" },
];
