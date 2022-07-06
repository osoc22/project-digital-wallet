import ProcedureForm from "./components/ProcedureForm";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ProcedureDesign from "./components/ProcedureDesign";
import  Navbar from './components/Navbar';

export default function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<ProcedureForm />} />
        <Route path="design" element={<ProcedureDesign />} />
      </Routes>
    </Box>
  );
}
