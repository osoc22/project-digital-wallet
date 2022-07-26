import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import TextField from "./TextField";
import CheckboxLabel from "./CheckboxLabel";
import FieldTypeSelect from "./FieldTypeSelect";
import { Draggable } from "react-beautiful-dnd";

export default function SimpleAccordion({
  libraryQuestions,
}: {
  libraryQuestions: any[];
}) {
  return (
    <div>
      <Accordion
        defaultExpanded={true}
        sx={{ boxShadow: "none", backgroundColor: "#f7f9fa" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>Field types</h3>
        </AccordionSummary>
        <AccordionDetails>
          {libraryQuestions.map((item, index) => (
            <Draggable
              key={item.id}
              draggableId={item.id}
              index={index}
              disableInteractiveElementBlocking={true}
            >
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  sx={{ p: 2, m: 1, border: 2, borderColor: "#c3cfd9" }}
                >
                  <TextField label={item.content} />
                </Box>
              )}
            </Draggable>
          ))}
          <Box sx={{ p: 2, m: 1, border: 2, borderColor: "#c3cfd9" }}>
            <span>Multiple choice question</span>
            <CheckboxLabel />
          </Box>
          <Box sx={{ p: 2, m: 1, border: 2, borderColor: "#c3cfd9" }}>
            <FieldTypeSelect />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
