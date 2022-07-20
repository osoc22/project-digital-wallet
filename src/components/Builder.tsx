import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import { useCallback, useState } from "react";
import { Component } from "../contexts/ProcedureProvider";
import FieldType from "./FieldType";
import SwitchLabels from "./SwitchLabels";
import FieldsLibrary from "./FieldsLibrary";
import BuilderMainContainer from "./BuilderMainContainer";

export default function Builder() {
  const [component, setComponent] = useState<Partial<Component>>({
    properties: { email: { type: "email" } },
  });
  const [selectedField, setSelectedField] = useState<string>();

  const [libraryQuestions] = useState([
    { id: "name", name: "name", type: "string", content: "Name" },
    {
      id: "textInput",
      name: "phone",
      type: "integer",
      content: "Phone Number",
    },
  ]);

  const [canvasQuestions, setCanvasQuestions] = useState([
    { id: "email", name: "email", type: "email", content: "Email" },
  ]);

  const LIBRARY_DROPPABLE = "gallery_droppable";
  const CANVAS_DROPPABLE = "canvas_droppable";

  const addField = useCallback(
    (fieldName: string, fieldType: string) => {
      const { name, properties, required } = component;

      setComponent({
        name,
        properties: { ...(properties ?? {}), [fieldName]: { type: fieldType } },
        required,
      });
    },
    [component]
  );

  const updateFieldType = useCallback(
    (type: string) => {
      if (!selectedField) return;
      const { name, properties, required } = component;

      setComponent({
        name,
        properties: { ...(properties ?? {}), [selectedField]: { type } },
        required,
      });
    },
    [component, selectedField]
  );

  const toggleRequired = useCallback(() => {
    if (!selectedField) return;
    setComponent((prevComp) => ({
      ...prevComp,
      required: prevComp.required?.includes(selectedField)
        ? prevComp.required.filter((r) => r !== selectedField)
        : [...(prevComp.required ?? []), selectedField],
    }));
  }, [selectedField]);

  const reorderAccross = (
    list1: any[],
    list2: any[],
    startIndex: number,
    startDroppableId: string,
    endIndex: number,
    endDroppableId: string
  ) => {
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
      canvas: newCanvasQuestions,
    };
  };

  const reorderSameDroppable = (
    draggables: any[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(draggables);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <div className="builder-container">
      <DragDropContext
        onDragEnd={(result) => {
          const { destination, source } = result;

          // check if destination exists, i.e. a valid Droppable
          if (
            !destination ||
            // If destination and source droppable AND index of Draggable are the same, do nothing
            (destination.droppableId === source.droppableId &&
              destination.index === source.index) ||
            // Questions can and may not be dragged from the canvas to the library
            destination.droppableId === LIBRARY_DROPPABLE
          ) {
            return;
          } else if (
            destination.droppableId === source.droppableId &&
            destination.index !== source.index
          ) {
            const reorderedFields = reorderSameDroppable(
              canvasQuestions,
              result.source.index,
              result.destination?.index ?? 0
            );
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

            // setLibraryQuestions(orderedItems.library);
            setCanvasQuestions(orderedItems.canvas);

            const field = orderedItems.library[result.source.index];
            addField(field.name, field.type);
          }
        }}
      >
        <div className="builder-sidebar">
          <FieldsLibrary
            droppableId={LIBRARY_DROPPABLE}
            libraryQuestions={libraryQuestions}
          />
        </div>
        <div className="builder-main">
          <div className="builder-component-section">
            <BuilderMainContainer
              droppableId={CANVAS_DROPPABLE}
              canvasQuestions={canvasQuestions}
              setSelectedField={setSelectedField}
            />
            <Button variant="contained" color="primary" size="large">
              + Create new field
            </Button>
          </div>
        </div>
      </DragDropContext>
      <div className="builder-helper">
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column", py: 2 }}>
            <h2>Field Details</h2>
            {selectedField && component.properties?.[selectedField] && (
              <>
                <h3>Fieldtype</h3>
                <FieldType
                  updateFieldType={updateFieldType}
                  type={component.properties[selectedField].type}
                />
                <div className="builder-helper-footer">
                  <SwitchLabels
                    required={
                      component.required?.includes(selectedField) ?? false
                    }
                    toggleRequired={toggleRequired}
                  />
                </div>
              </>
            )}
          </Box>
        </Container>
      </div>
    </div>
  );
}
