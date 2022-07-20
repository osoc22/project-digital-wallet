import FieldSelect from "./FieldSelect";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SwitchLabels from "./SwitchLabels";

export default function BuilderHelper({
  updateFieldType,
  type,
  toggleRequired,
  required,
}: {
  updateFieldType: (type: string) => void;
  type: string;
  toggleRequired: () => void;
  required: boolean;
}) {
  return (
    <Container sx={{ marginTop: "195px", backgroundColor: "#d3d3d3" }}>
      <Box sx={{ display: "flex", flexDirection: "column", py: 2 }}>
        <FieldSelect updateFieldType={updateFieldType} type={type} />
        <div className="builder-helper-footer">
          <SwitchLabels required={required} toggleRequired={toggleRequired} />
        </div>
      </Box>
    </Container>
  );
}
