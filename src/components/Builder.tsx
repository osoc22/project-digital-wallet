import Container from "@mui/material/Container";
import { Box, Button, Stack } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import { useCallback, useState } from "react";
import { Component, useProcedures } from "../contexts/ProcedureProvider";
import FieldType from "./FieldType";
import SwitchLabels from "./SwitchLabels";
import FieldsLibrary from "./FieldsLibrary";
import BuilderMainContainer from "./BuilderMainContainer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Builder() {
  const navigate = useNavigate();
  const { addComponent } = useProcedures();

  const [component, setComponent] = useState<Partial<Component>>({
    properties: { email: { type: "string", format: "email" } },
  });
  const [selectedField, setSelectedField] = useState<string>();

  const [libraryQuestions] = useState([
    { id: "name", name: "name", type: "string", content: "Name" },
    {
      id: "phone",
      name: "phone",
      type: "integer",
      content: "Phone Number",
    },
    {
      id: "email",
      name: "email",
      type: "string",
      format: "email",
      content: "Email",
    },
    {
      id: "datetime",
      name: "datetime",
      type: "string",
      format: "datetime",
      content: "DateTime",
    },
  ]);

  const [canvasQuestions, setCanvasQuestions] = useState([
    { id: "email", name: "email", type: "string", format: "email", content: "Email" },
  ]);

  const LIBRARY_DROPPABLE = "gallery_droppable";
  const CANVAS_DROPPABLE = "canvas_droppable";

  const addField = useCallback(
    (fieldName: string, fieldType: string, format?: string) => {
      const { properties = {}, ...rest } = component;
      const field = { type: fieldType, format };
      if (!format) delete field.format;

      setComponent({
        ...rest,
        properties: { ...properties, [fieldName]: field },
      });
    },
    [component]
  );

  const deleteField = useCallback(
    (fieldName: string) => {
      const { properties = {}, ...rest } = component;
      const newProperties = Object.keys(properties).reduce((object: { [key: string]: any }, key: string) => {
        if (key !== fieldName) {
          object[key] = properties[key];
        }
        return object;
      }, {});

      setComponent({
        ...rest,
        properties: newProperties,
      });
      setCanvasQuestions(canvasQuestions.filter((c) => c.name !== fieldName));
    },
    [component, canvasQuestions]
  );

  const updateFieldType = useCallback(
    (type: object) => {
      if (!selectedField) return;
      const { properties = {}, ...rest } = component;

      setComponent({
        ...rest,
        properties: { ...properties, [selectedField]: type },
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

  const reorderSameDroppable = (draggables: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(draggables);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <Stack>
      <Navbar
        page="Component Builder"
        saveAction={() => {
          addComponent(component as Component);
          navigate("/canvas");
        }}
      >
        <Button variant="text" onClick={() => navigate("/canvas")}>
          Cancel
        </Button>
      </Navbar>
      <div className="builder-container">
        <DragDropContext
          onDragEnd={(result) => {
            const { destination, source } = result;

            // check if destination exists, i.e. a valid Droppable
            if (
              !destination ||
              // If destination and source droppable AND index of Draggable are the same, do nothing
              (destination.droppableId === source.droppableId && destination.index === source.index) ||
              // Questions can and may not be dragged from the canvas to the library
              destination.droppableId === LIBRARY_DROPPABLE
            ) {
              return;
            } else if (destination.droppableId === source.droppableId && destination.index !== source.index) {
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
              addField(field.name, field.type, field.format);
            }
          }}
        >
          <div className="builder-sidebar">
            <FieldsLibrary droppableId={LIBRARY_DROPPABLE} libraryQuestions={libraryQuestions} />
          </div>
          <div className="builder-main">
            <div className="builder-component-section">
              <BuilderMainContainer
                droppableId={CANVAS_DROPPABLE}
                canvasQuestions={canvasQuestions}
                setSelectedField={setSelectedField}
                deleteField={deleteField}
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
                  <FieldType updateFieldType={updateFieldType} field={component.properties[selectedField]} />
                  <div className="builder-helper-footer">
                    <SwitchLabels
                      required={component.required?.includes(selectedField) ?? false}
                      toggleRequired={toggleRequired}
                    />
                  </div>
                </>
              )}
            </Box>
          </Container>
        </div>
      </div>
    </Stack>
  );
}
