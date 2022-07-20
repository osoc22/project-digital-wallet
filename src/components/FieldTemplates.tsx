import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import FieldTemplateTextField from "./FieldTemplateTextField";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>Template fields</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ p: 2, m: 1, border: 0.5 }}>
            <FieldTemplateTextField />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
