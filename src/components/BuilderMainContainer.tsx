import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputBox from "./InputBox";
import Droppable from "./Droppable";
import { Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { IconButton, Stack } from "@mui/material";

export default function BuilderMainContainer({
  droppableId,
  canvasQuestions,
  setSelectedField,
}: {
  droppableId: string;
  canvasQuestions: any[];
  setSelectedField: (fieldName: string) => void;
}) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          maxWidth="sm"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "150px",
          }}
        >
          {canvasQuestions.map((item, index) => (
            <Draggable key={index} draggableId={item.id + index} index={index}>
              {(provided) => (
                <Stack
                  direction="row"
                  onClick={() => setSelectedField(item.name)}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  sx={{ marginBottom: "30px" }}
                >
                  <IconButton
                    sx={{
                      width: "auto",
                      height: "auto",
                      ml: "auto",
                      ":hover": {
                        cursor: "grab",
                        backgroundColor: "transparent",
                      },
                    }}
                    disabled
                  >
                    <DragIndicatorIcon htmlColor="#4b5c6b" fontSize="large" />
                  </IconButton>

                  <Box
                    sx={{
                      width: "100%",
                      border: 2,
                      borderColor: "#c3cfd9",
                    }}
                  >
                    <InputBox label={item.content} />
                  </Box>
                </Stack>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}
