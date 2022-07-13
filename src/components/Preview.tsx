import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import StepPreview from "./StepPreview";
import { contactDetails, theftInfo, bikeInfo } from "../steps";
import { useCallback, useMemo, useState } from "react";
import { LinearProgress, Stack } from "@mui/material";
import { Procedure } from "./ProcedureForm";

export default function Preview() {
  const [procedure] = useState<Procedure>({
    name: "Bike Theft Report",
    category: "Justice",
    description: "Report a bike theft",
    steps: [contactDetails, theftInfo, bikeInfo],
  });
  const [response, setResponse] = useState({});
  const [page, setPage] = useState(0);
  const currentPage = useMemo(() => page + 1, [page]);
  const maxPage = useMemo(() => procedure.steps.length, [procedure]);
  const step = useMemo(() => procedure.steps[page], [procedure, page]);
  const progress = useMemo(
    () => (currentPage / maxPage) * 100,
    [currentPage, maxPage]
  );

  const back = useCallback(
    (data: object) => {
      let newResponse = response;
      Object.keys(data).forEach((key) => {
        delete newResponse[key as keyof typeof response];
      });
      setResponse(newResponse);
      setPage(Math.max(0, page - 1));
    },
    [response, page]
  );

  const next = useCallback(
    (data: object) => {
      setResponse({ ...response, ...data });
      setPage(Math.min(maxPage - 1, page + 1));
    },
    [response, page, maxPage]
  );

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "inline-block",
          p: 1,
          mx: 1,
          bgcolor: "grey.100",
          color: "grey.800",
          border: "1px solid",
          borderColor: "grey.300",
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
          <h2 style={{ marginBottom: 80 }}>{procedure.name}</h2>
          <StepPreview step={step} part={currentPage} next={next} back={back} />
        </Box>
        <Stack spacing={2} display={"flex"} marginBottom={5} marginTop={5}>
          <span>
            Part {currentPage} of {maxPage}
          </span>
        </Stack>
      </Box>
    </Container>
  );
}
