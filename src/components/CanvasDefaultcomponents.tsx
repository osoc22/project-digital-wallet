import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import DefaultComponentsContactDetails from './DefaultComponentsContactDetails';
import DefaultComponentsDateAndLocation from './DefaultComponentsDateAndLocation';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Default Components</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{p:2, m:1, border:0.5}}>
            <DefaultComponentsContactDetails />
          </Box>
          <Box sx={{p:2, m:1, border:0.5}}>
            <DefaultComponentsDateAndLocation />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
