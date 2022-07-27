import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

const Navbar = ({
  page,
  title,
  elements
}: {
  page: string;
  title?: string;
  elements?: ReactNode;
}) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#f7f9fa",
        borderBottom: 2,
        borderColor: "#cdd7df",
        boxShadow: "none",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" p={2}>
        <Typography
          color="#788896"
          variant="h5"
          component="h1"
          fontWeight={900}
        >
          {page}
        </Typography>
        <Typography
          color="black"
        >{title}</Typography>
        <Stack direction="row" spacing={2}>
          {elements}
        </Stack>
      </Stack>
    </AppBar>
  );
};
export default Navbar;
