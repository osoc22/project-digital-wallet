import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import StepPreview from "./StepPreview";
import { contactDetails, theftInfo } from "../steps";
import { useMemo, useState } from "react";
import { LinearProgress, Stack } from "@mui/material";

export default function Preview() {
  const [procedure] = useState({
    name: "Bike Theft Report",
    steps: [contactDetails, theftInfo],
  });
  const [page, setPage] = useState(1);
  const maxPage = useMemo(() => procedure.steps.length, [procedure]);
  const progress = useMemo(() => (page / maxPage) * 100, [page, maxPage]);

  return (
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
          <Box style={{ textAlign: "left", height: 600 }} p={2}>
            <Box sx={{ width: "100%", py: 5 }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <h3 style={{ marginBottom: 80 }}>{procedure.name}</h3>
            <h3>Question {page}</h3>
            <StepPreview schema={contactDetails} onSubmit={console.log} />
          </Box>
          <Stack spacing={2} display={"flex"} marginBottom={5} marginTop={5}>
            <span>
              Question {page} of {maxPage}
            </span>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
