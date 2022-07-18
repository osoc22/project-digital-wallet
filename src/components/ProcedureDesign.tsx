import { Box, Divider, Grid } from "@mui/material";
import { useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Droppable from "./Droppable";

export default function ProcedureDesign() {
  const [items, setItems] = useState([
    { id: "1", content: "Step 1" },
    { id: "2", content: "Step 2" },
    { id: "3", content: "Step 3" },
  ]);

  // TODO: Remove following two lines
  // const obj = {a: "456", b: "123"};
  // obj = {...obj, a: "789"}

  const [questions, setQuestions] = useState([
    { id: "1", content: "Question 1" },
    { id: "2", content: "Question 2" },
    { id: "3", content: "Question 3" },
  ]);

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  return (
    <Grid container spacing={3} height="100vh" width="100vw" m={0}>
      <Grid item xs>
        <span>Steps</span>
        <DragDropContext onDragEnd={(result) => {
          const { destination, source, draggableId } = result;

          // item is being dragged to where it came from, do nothing
          if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
            return;
          }
      
          const orderedItems = reorder(
            items,
            result.source.index,
            result.destination?.index ?? 0
          );
      
          // @ts-ignore
          setItems(orderedItems);
        }}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef}>
                {items.map((item, index) => (
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
        <DragDropContext onDragEnd={(result) => {
          const { destination, source, draggableId } = result;

          // item is being dragged to where it came from, do nothing
          if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
            return;
          }
      
          const orderedQuestions = reorder(
            questions,
            result.source.index,
            result.destination?.index ?? 0
          );
      
          // @ts-ignore
          setQuestions(orderedQuestions);
        }}>
          <Droppable droppableId="questionList">
            {(provided) => (
              <div ref={provided.innerRef}>
                {questions.map((item, index) => (
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
      <Grid item xs>
        <span>Configure</span>
      </Grid>
    </Grid>
  );
}
