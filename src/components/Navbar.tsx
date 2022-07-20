import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

const Navbar = ({
  page,
  children,
  saveAction,
}: {
  page: string;
  children: ReactNode;
  saveAction: () => void;
}) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f7f9fa",
        borderBottom: 2,
        borderColor: "#cdd7df",
      }}
    >
      <Stack direction="row" justifyContent="space-between" p={2}>
        <Typography
          color="#788896"
          variant="h5"
          component="h1"
          fontWeight={900}
        >
          {page}
        </Typography>
        <Stack direction="row" spacing={2}>
          {children}
          <Button variant="contained" onClick={saveAction}>
            Save
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
};
export default Navbar;
