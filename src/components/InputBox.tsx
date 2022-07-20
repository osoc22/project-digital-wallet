import { IconButton, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicTextFields({
  label,
  deleteField,
  fieldName,
}: {
  label: string;
  deleteField: (fieldName: string) => void;
  fieldName: string;
}) {
  return (
    <Stack direction="column" spacing={1} m={1}>
      <IconButton
        sx={{ width: "auto", ml: "auto" }}
        onClick={() => deleteField(fieldName)}
      >
        <DeleteIcon htmlColor="#4b5c6b" />
      </IconButton>
      <TextField id="outlined-basic" label={label} variant="outlined" />
    </Stack>
  );
}
