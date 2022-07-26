import Box from "@mui/material/Box";
import DefaultComponentsContactDetails from "./DefaultComponentsContactDetails";

import List from "@mui/material/List";

export default function SimpleAccordion({
  title,
  fields,
}: {
  title: string;
  fields: Array<{ icon: JSX.Element; name: string; description: string }>;
}) {
  return (
    <List component="div" disablePadding>
      <Box sx={{ m: 1, border: "2px solid #d5d5d5" }}>
        <DefaultComponentsContactDetails title={title} fields={fields} />
      </Box>
    </List>
  );
}
