import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";

export default function BasicTextFields({
  label: contentLabel,
}: {
  label?: string;
}) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          width: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label={contentLabel ?? "Standard"}
        variant="standard"
      />
      <InputLabel />
    </Box>
  );
}
