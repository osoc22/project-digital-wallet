import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export default function BasicSelect() {
  const [province, setProvince] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setProvince(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Province</InputLabel>
        <Select value={province} label="Province" onChange={handleChange}>
          <MenuItem value={10}>Antwerpen</MenuItem>
          <MenuItem value={20}>Limburg</MenuItem>
          <MenuItem value={30}>Vlaams Brabant</MenuItem>
          <MenuItem value={40}>Oost-Vlaanderen</MenuItem>
          <MenuItem value={50}>West-Vlaanderen</MenuItem>
          <MenuItem value={60}>Hainaut</MenuItem>
          <MenuItem value={70}>Brabant wallon</MenuItem>
          <MenuItem value={80}>Namur</MenuItem>
          <MenuItem value={90}>Liège</MenuItem>
          <MenuItem value={100}>Luxembourg</MenuItem>
          <MenuItem value={110}>Brussels</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
