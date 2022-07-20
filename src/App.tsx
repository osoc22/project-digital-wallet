import ProcedureForm from "./components/ProcedureForm";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Builder from "./components/Builder";

export default function App() {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Routes>
          <Route path="/" element={<ProcedureForm />} />
          <Route path="preview" element={<Preview />} />
          <Route path="builder" element={<Builder />} />
        </Routes>
      </Box>
    </>
  );
}
