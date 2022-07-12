import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LinearDeterminate from "./LinearDeterminate";
import Pagination from "./Pagination";
import Button from "@mui/material/Button";
import Phone from "../assets/phone-transparent.png";
import StepPreview from "./StepPreview";
import { contactDetails } from "../steps";

export default function Preview() {
  return (
    <>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Container maxWidth="xs">
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "inline-block",
              p: 1,
              mx: 1,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#fffff" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            <LinearDeterminate />
            <div style={{ textAlign: "left", height: 600 }}>
              <h3 style={{ marginBottom: 80 }}>Form Name</h3>
              <h3>Question 1</h3>
              <StepPreview schema={contactDetails} onSubmit={console.log} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "25px",
                paddingLeft: "25px",
              }}
            >
              <Button>Back</Button>
              <Button>Next</Button>
            </div>
            <Pagination />
          </Box>
        </Container>
      </div>
    </>
  );
}
