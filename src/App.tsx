import ProcedureForm from "./components/ProcedureForm";
import { Container, Box } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <ProcedureForm />
      </Box>
    </Container>
  );
}
