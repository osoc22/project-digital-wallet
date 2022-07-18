// import {Book} from '@mui/icons-material/book';
// import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import TextField from './TextField';
import Container from '@mui/material/Container';
import { Box, Divider, Grid } from '@mui/material';
import BuilderHelper from './BuilderHelper';
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Droppable from "./Droppable";
import { useState } from "react";

export default function ProcedureDesign() {
  const [libraryQuestions, setLibraryQuestions] = useState([
    { id: "1", content: "Question 1" },
    { id: "2", content: "Question 2" },
    { id: "3", content: "Question 3" },
  ]);

  const [canvasQuestions, setCanvasQuestions] = useState([
    { id: "4", content: "Question 4" },
    { id: "5", content: "Question 5" },
    { id: "6", content: "Question 6" },
  ]);

  const LIBRARY_DROPPABLE = 'gallery_droppable'
  const CANVAS_DROPPABLE = 'canvas_droppable'

  const reorder = (list1: any[], list2: any[], startIndex: number, startDroppableId: string, endIndex: number, endDroppableId: string) => {
    // make copies of both lists
    const result1 = Array.from(list1);
    const result2 = Array.from(list2);

    let sourceList: any[];
    if (startDroppableId === LIBRARY_DROPPABLE) {
      sourceList = result1;
    } else {
      sourceList = result2;
    }

    let destinationList: any[];
    if (endDroppableId === LIBRARY_DROPPABLE) {
      destinationList = result1;
    } else {
      destinationList = result2;
    }

    // const [removed] = sourceList.splice(startIndex, 1);
    const removed = sourceList[startIndex];
    destinationList.splice(endIndex, 0, removed);

    return {
      library: result1,
      canvas: result2
    };

  };

  return (
    <DragDropContext onDragEnd={(result) => {
      const { destination, source } = result;

      // check if destination exists, i.e. a valid Droppable
      if (!destination
          // if destination and source Droppable are the same, do nothing
          || (destination.droppableId === source.droppableId && destination.index === source.index)
          // Questions can and may not be dragged from the canvas to the library
          || (destination.droppableId === LIBRARY_DROPPABLE)
          ) {
        return;
      }

      const orderedItems = reorder(
        libraryQuestions,
        canvasQuestions,
        result.source.index,
        result.source.droppableId,
        result.destination?.index ?? 0,
        result.destination?.droppableId ?? LIBRARY_DROPPABLE
      );

      setLibraryQuestions(orderedItems.library);
      setCanvasQuestions(orderedItems.canvas);
    }}>
      <Grid container spacing={3} height="100vh" width="100vw" m={0}>
        <Grid item xs>
          <span>Steps</span>

          <Droppable droppableId={LIBRARY_DROPPABLE}>
            {(provided) => (
              <div ref={provided.innerRef}>
                {libraryQuestions.map((item, index) => (
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
                        <TextField/>
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={6}>
          <span>Design</span>
          <Droppable droppableId={CANVAS_DROPPABLE}>
            {(provided) => (
              <div ref={provided.innerRef}>
                {canvasQuestions.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <Box 
                        onClick={(data) => {console.log(data)}}
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
                        <TextField/>
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs>
          <span>Configure</span>
          <Container>
          <Box>
            <BuilderHelper />
          </Box>
        </Container>
        </Grid>
      </Grid>
    </DragDropContext>
  );
}
