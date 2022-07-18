// import {Book} from '@mui/icons-material/book';
// import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import TextField from './TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BuilderHelper from './BuilderHelper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Button from '@mui/material/Button';
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import Droppable from "./Droppable";
import { useState } from "react";

export default function ProcedureDesign() {
  const [items, setItems] = useState([
    { id: "1", content: "Step 1" },
    { id: "2", content: "Step 2" },
    { id: "3", content: "Step 3" },
  ]);

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <div className="builder-container">
      <div className="builder-sidebar">
        <Button className="builder-item"><LocalLibraryOutlinedIcon /></Button>
        <Button className="builder-item"><SettingsOutlinedIcon /></Button>
      </div>
      <div className="builder-main">
        <div className='builder-title-section'>
          <h1>Contact Details</h1>
        </div>
        <div className='builder-component-section'>
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
            <Droppable droppableId='droppable'>
              {(provided) => (
                <div ref={provided.innerRef}>
                  {items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <Box sx={{ width: '100%', border: 2, marginBottom: '30px', borderRadius: 1 }} onClick={(data) => {console.log(data)}} 
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          p={2}
                          m={2}
                        >
                          <TextField/>
                          {/* {item.content} */}
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button>
            <AddCircleOutlineIcon sx={{ width: '60px' }} />
          </Button>
        </Box>
      </div>
      <div className="builder-helper">
        <Container>
          <Box>
            <BuilderHelper />
          </Box>
        </Container>
      </div>
    </div>
  )
}
