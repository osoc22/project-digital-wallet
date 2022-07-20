import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ label }: { label: string }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { pl: 1.8, mx: "auto", width: "95%" },
      }}
      noValidate
      autoComplete="off"
    >
      <p style={{ marginBottom: -1 }}>{label}</p>
      <TextField id="outlined-basic" label="" variant="outlined" size="small" />
    </Box>
  );
}
