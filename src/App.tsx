import ProcedureForm from "./components/ProcedureForm";
import { Container, Stack } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Stack direction="column" justifyContent="center">
        <ProcedureForm />
      </Stack>
    </Container>
  );
}
