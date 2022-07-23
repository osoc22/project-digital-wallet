import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SearchInput from "./SearchInput";
import CanvasDefaultComponents from './CanvasDefaultcomponents';
import CanvasCustomComponents from './CanvasCustomComponents';
import CanvasComponentPreFilledData from './CanvasComponentPreFilledData';
import CanvasComponentUnfilledData from './CanvasComponentUnfilledData';
import CanvasTabs from './CanvasTabs';

export default function ProcedureDesign() {
  return (
    <Grid container>
      <Grid item xs={2.5}>
        <Box
          sx={{
            border: "0.5px solid #d3d3d3",
            height: "100%",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Box>
            <Box
              sx={{
                marginBottom: 3,
                mx: 0.5,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CanvasTabs />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <SearchInput />
            </Box>
          </Box>
          <Box
            sx={{
              my: 3,
              px: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ my: 2 }}>
              <CanvasDefaultComponents />
            </Box>
            <Box>
              <CanvasCustomComponents />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={9.5}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CanvasComponentPreFilledData />
          <CanvasComponentUnfilledData />
          <Button variant="contained">+ Add Component</Button>
        </Box>
      </Grid>
    </Grid>
  );}
