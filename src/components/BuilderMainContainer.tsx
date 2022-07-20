import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputBox from "./InputBox";
import Droppable from "./Droppable";
import { Draggable } from "react-beautiful-dnd";

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
                <Box
                  sx={{ width: "100%", border: 1, marginBottom: "30px", py: 2 }}
                  onClick={() => setSelectedField(item.name)}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <InputBox label={item.content} />
                </Box>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}
