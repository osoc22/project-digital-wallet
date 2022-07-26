import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PrefilledCitizenData from "./PrefilledCitizenData";
import { useNavigate } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";

export default function ComponentPrefilledData({
  id,
  deleteComponentById,
  title,
  fields
}: {
  id: string;
  deleteComponentById: (id: string) => void;
  title: string;
  fields: Array<{ icon: JSX.Element; name: string; description: string }>;
}) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        marginRight: "50px"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <DragHandleIcon fontSize="large" />
      </Box>
      <Box
        sx={{
          minHeight: "225px",
          border: "1px solid gray"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid gray"
          }}
        >
          <h5 style={{ marginLeft: "15px" }}>{title}</h5>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => {
                navigate("/builder");
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteComponentById(id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <PrefilledCitizenData fields={fields} />
        </Box>
      </Box>
    </Box>
  );
}
