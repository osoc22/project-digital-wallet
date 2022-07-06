import { Box, Divider, Grid } from "@mui/material";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Droppable from "./Droppable";

export default function ProcedureDesign() {
  return (
    <Grid container spacing={3} height="100vh" width="100vw" m={0}>
      <Grid item xs>
        <span>Steps</span>
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef}>
                {[
                  { id: "1", content: "Step 1" },
                  { id: "2", content: "Step 2" },
                ].map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          borderRadius: 1,
                          border: 2,
                        }}
                        p={2}
                        m={2}
                      >
                        {item.content}
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Grid>
      <Divider orientation="vertical" />
      <Grid item xs={6}>
        <span>Design</span>
      </Grid>
      <Divider orientation="vertical" />
      <Grid item xs>
        <span>Configure</span>
      </Grid>
    </Grid>
  );
}
