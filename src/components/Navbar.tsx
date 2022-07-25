import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Navbar = ({
  page,
  title,
  actionElement,
  saveAction,
}: {
  page: string;
  title: string;
  actionElement: JSX.Element;
  saveAction: () => void;
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
      <Stack direction="row" justifyContent="space-between" p={2}>
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
          {actionElement}
          <Button variant="contained" onClick={saveAction}>
            Save
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
};
export default Navbar;
