import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ComponentPreview from "./ComponentPreview";
import { useCallback, useMemo, useState } from "react";
import { Button, LinearProgress, Stack } from "@mui/material";
import { useProcedures } from "../contexts/ProcedureProvider";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Preview() {
  const navigate = useNavigate();
  const { procedure } = useProcedures();
  const [response, setResponse] = useState({});
  const [page, setPage] = useState(0);
  const currentPage = useMemo(() => page + 1, [page]);
  const maxPage = useMemo(() => procedure?.components?.length ?? 1, [procedure]);
  const component = useMemo(() => procedure?.components[page], [procedure, page]);
  const progress = useMemo(() => (currentPage / maxPage) * 100, [currentPage, maxPage]);

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
    <Stack spacing={20}>
      <Navbar
        page="Preview Mode"
        actionElement={
          <Button variant="text" onClick={() => navigate("/canvas")}>
            Back
          </Button>
        }
        saveButton={
          <Button variant="contained" onClick={() => alert(JSON.stringify(procedure, null, 2))}>
            Export
          </Button>
        }
      />
      <Container maxWidth="xs" sx={{ height: "100vh", alignSelf: "center" }}>
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
            boxShadow: "0 0 20px #e2e2e2"
          }}
        >
          <Box
            sx={{
              width: "175px",
              height: "30px",
              background: "white",
              position: "absolute",
              margin: "0 100px",
              borderRadius: "0 0 20px 20px"
            }}
          ></Box>
          <Box
            sx={{
              textAlign: "left",
              width: "100%",
              height: "100%",
              background: "#f2f2f2",
              borderRadius: "30px",
              overflowY: "auto"
            }}
          >
            <Stack p={2} spacing={2} height="95%" justifyContent="space-between">
              <Box pt={4}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
              <h2>{procedure?.name}</h2>
              {component && <ComponentPreview component={component} part={currentPage} next={next} back={back} />}
              <Box textAlign="center" justifySelf="end">
                Part {currentPage} of {maxPage}
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Stack>
  );
}
