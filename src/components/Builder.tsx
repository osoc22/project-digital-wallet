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
    { id: "shortText", content: "Short Text" },
    { id: "template", content: "Template" },
  ]);

  const [canvasQuestions, setCanvasQuestions] = useState([
    { id: "1", content: "First field" },
  ]);

  const LIBRARY_DROPPABLE = 'gallery_droppable'
  const CANVAS_DROPPABLE = 'canvas_droppable'

  const reorderAccross = (list1: any[], list2: any[], startIndex: number, startDroppableId: string, endIndex: number, endDroppableId: string) => {
    // make copies of both lists
    const newLibraryQuestions = Array.from(list1);
    const newCanvasQuestions = Array.from(list2);

    let sourceList: any[];
    if (startDroppableId === LIBRARY_DROPPABLE) {
      sourceList = newLibraryQuestions;
    } else {
      sourceList = newCanvasQuestions;
    }

    let destinationList: any[];
    if (endDroppableId === LIBRARY_DROPPABLE) {
      destinationList = newLibraryQuestions;
    } else {
      destinationList = newCanvasQuestions;
    }

    // const [removed] = sourceList.splice(startIndex, 1);
    const removed = sourceList[startIndex];
    destinationList.splice(endIndex, 0, removed);

    return {
      library: newLibraryQuestions,
      canvas: newCanvasQuestions
    };
  };

  const reorderSameDroppable = (draggables: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(draggables);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <DragDropContext onDragEnd={(result) => {
      const { destination, source } = result;

      // check if destination exists, i.e. a valid Droppable
      if (!destination
        // If destination and source droppable AND index of Draggable are the same, do nothing
        || (destination.droppableId === source.droppableId && destination.index === source.index)
        // Questions can and may not be dragged from the canvas to the library
        || (destination.droppableId === LIBRARY_DROPPABLE)
      ) {
        return;
      } else if (destination.droppableId === source.droppableId && destination.index !== source.index) {
        const reorderedFields = reorderSameDroppable(canvasQuestions, result.source.index, result.destination?.index ?? 0);
        setCanvasQuestions(reorderedFields as any[]);
      } else {
        const orderedItems = reorderAccross(
          libraryQuestions,
          canvasQuestions,
          result.source.index,
          result.source.droppableId,
          result.destination?.index ?? 0,
          result.destination?.droppableId ?? LIBRARY_DROPPABLE
        );

        setLibraryQuestions(orderedItems.library);
        setCanvasQuestions(orderedItems.canvas);
      }
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
                        <TextField label={item.content} />
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
                  <Draggable key={index} draggableId={item.id + index} index={index}>
                    {(provided) => (
                      <Box
                        onClick={(data) => { console.log(data) }}
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
                        <TextField label={item.content} />
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
