import { Box, Divider, Grid } from "@mui/material";
import { useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { isTemplateSpan } from "typescript";
import Droppable from "./Droppable";

export default function ProcedureDesign() {
  const [items, setItems] = useState([
    { id: "1", content: "Step 1" },
    { id: "2", content: "Step 2" },
    { id: "3", content: "Step 3" },
  ]);

  const [items2, setItems2] = useState([
    { id: "4", content: "Step 4" },
    { id: "5", content: "Step 5" },
    { id: "6", content: "Step 6" },
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
      const { destination, source, draggableId } = result;

      // item is being dragged to where it came from, do nothing
      if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
        return;
      }

      const orderedItems = reorder(
        items,
        items2,
        result.source.index,
        result.source.droppableId,
        result.destination?.index ?? 0,
        result.destination?.droppableId ?? LIBRARY_DROPPABLE
      );

      setItems(orderedItems.library);
      setItems2(orderedItems.canvas);
    }}>
      <Grid container spacing={3} height="100vh" width="100vw" m={0}>
        <Grid item xs>
          <span>Steps</span>

          <Droppable droppableId={LIBRARY_DROPPABLE}>
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

        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={6}>
          <span>Design</span>
          <Droppable droppableId={CANVAS_DROPPABLE}>
            {(provided) => (
              <div ref={provided.innerRef}>
                {items2.map((item, index) => (
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
                        Ola! {item.content}
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
        </Grid>
      </Grid>
    </DragDropContext>
  );
}
