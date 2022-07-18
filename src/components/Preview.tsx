import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ComponentPreview from "./ComponentPreview";
import { contactDetails, theftInfo, bikeInfo } from "../components";
import { useCallback, useMemo, useState } from "react";
import { LinearProgress, Stack } from "@mui/material";
import { Procedure } from "../ProcedureProvider";

export default function Preview() {
  // TODO: replace with context procedure
  const [procedure] = useState<Procedure>({
    name: "Bike Theft Report",
    category: "Justice",
    description: "Report a bike theft",
    components: [contactDetails, theftInfo, bikeInfo],
  });
  const [response, setResponse] = useState({});
  const [page, setPage] = useState(0);
  const currentPage = useMemo(() => page + 1, [page]);
  const maxPage = useMemo(() => procedure.components.length, [procedure]);
  const component = useMemo(() => procedure.components[page], [procedure, page]);
  const progress = useMemo(
    () => (currentPage / maxPage) * 100,
    [currentPage, maxPage]
  );

  const back = useCallback(() => {
    setPage(Math.max(0, page - 1));
  }, [page]);

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
          height: "812px",
          width: "375px",
          display: "inline-block",
          borderRadius: "30px",
          fontSize: "0.875rem",
          fontWeight: "700",
          textAlign: "center",
          padding: "10px 10px 10px",
          boxShadow: "0 0 20px #e2e2e2",
        }}
      >
        <Box
          sx={{
            width: "175px",
            height: "30px",
            background: "white",
            position: "absolute",
            margin: "0 100px",
            borderRadius: "0 0 20px 20px",
          }}
        ></Box>
        <Box
          sx={{
            textAlign: "left",
            width: "100%",
            height: "100%",
            background: "#f2f2f2",
            borderRadius: "30px",
            overflowY: "auto",
          }}
        >
          <Stack p={2} spacing={2} height="95%" justifyContent="space-between">
            <Box pt={4}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <h2>{procedure.name}</h2>
            <ComponentPreview
              component={component}
              part={currentPage}
              next={next}
              back={back}
            />
            <Box textAlign="center" justifySelf="end">
              Part {currentPage} of {maxPage}
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
