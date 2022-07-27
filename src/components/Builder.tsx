import Container from "@mui/material/Container";
import { Box, Button, Stack } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import { useCallback, useMemo, useState } from "react";
import { useProcedures } from "../contexts/ProcedureProvider";
import FieldType from "./FieldType";
import SwitchLabels from "./SwitchLabels";
import FieldsLibrary from "./FieldsLibrary";
import BuilderMainContainer from "./BuilderMainContainer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

interface DroppableField {
  id: string;
  name: string;
  type: string;
  format?: string;
  content: string;
}

export default function Builder() {
  const navigate = useNavigate();
  const { selectedComponent, updateComponent } = useProcedures();
  const [selectedField, setSelectedField] = useState<string>();

  const canvasFields = useMemo(() => {
    if (!selectedComponent?.properties) return [];
    const props = selectedComponent.properties;
    return Object.keys(props).map(p => ({ id: p, name: p, type: props[p].type, format: props[p].format, content: p }));
  }, [selectedComponent]);

  const [libraryQuestions] = useState([
    { id: "name", name: "name", type: "string", content: "Name" },
    {
      id: "phone",
      name: "phone",
      type: "integer",
      content: "Phone Number"
    },
    {
      id: "email",
      name: "email",
      type: "string",
      format: "email",
      content: "Email"
    },
    {
      id: "datetime",
      name: "datetime",
      type: "string",
      format: "date-time",
      content: "DateTime"
    }
  ]);

  const LIBRARY_DROPPABLE = "gallery_droppable";
  const CANVAS_DROPPABLE = "canvas_droppable";

  const deleteField = useCallback(
    (fieldName: string) => {
      if (!selectedComponent) return;

      const { properties = {}, ...rest } = selectedComponent;
      const newProperties = Object.keys(properties).reduce((object: { [key: string]: any }, key: string) => {
        if (key !== fieldName) {
          object[key] = properties[key];
        }
        return object;
      }, {});

      updateComponent({
        ...rest,
        properties: newProperties
      });
    },
    [selectedComponent, updateComponent]
  );

  const updateFieldType = useCallback(
    (type: object) => {
      if (!selectedField || !selectedComponent) return;
      const { properties = {}, ...rest } = selectedComponent;

      updateComponent({
        ...rest,
        properties: { ...properties, [selectedField]: type }
      });
    },
    [selectedComponent, updateComponent, selectedField]
  );

  const toggleRequired = useCallback(() => {
    if (!selectedField || !selectedComponent) return;
    updateComponent({
      ...selectedComponent,
      required: selectedComponent.required?.includes(selectedField)
        ? selectedComponent.required.filter(r => r !== selectedField)
        : [...(selectedComponent.required ?? []), selectedField]
    });
  }, [selectedField, selectedComponent, updateComponent]);

  const reorderSameDroppable = (draggables: DroppableField[], startIndex: number, endIndex: number) => {
    const result = Array.from(draggables);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <Stack>
      <Navbar
        page="Component Builder"
        title="Title"
        elements={
          <>
            <Button variant="text" onClick={() => navigate("/canvas")}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => navigate("/canvas")}>
              Save Component
            </Button>
          </>
        }
      />
      <div className="builder-container">
        <DragDropContext
          onDragEnd={result => {
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
            }

            let fields = [];

            if (destination.droppableId === source.droppableId && destination.index !== source.index) {
              fields = reorderSameDroppable(canvasFields, result.source.index, result.destination?.index ?? 0);
            } else {
              fields = [...canvasFields];
              // @ts-ignore
              fields.splice(destination.index, 0, libraryQuestions[source.index]);
            }

            const properties: { [key: string]: any } = {};

            for (const field of fields) {
              properties[field.name] = { type: field.type, format: field.format };
            }

            // @ts-ignore
            updateComponent({ ...selectedComponent, properties });
          }}
        >
          <div className="builder-sidebar">
            <FieldsLibrary droppableId={LIBRARY_DROPPABLE} libraryQuestions={libraryQuestions} />
          </div>
          <div className="builder-main">
            <div className="builder-component-section">
              <BuilderMainContainer
                droppableId={CANVAS_DROPPABLE}
                canvasQuestions={canvasFields}
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
              {selectedField && selectedComponent?.properties?.[selectedField] && (
                <>
                  <FieldType updateFieldType={updateFieldType} field={selectedComponent?.properties[selectedField]} />
                  <div className="builder-helper-footer">
                    <SwitchLabels
                      required={selectedComponent?.required?.includes(selectedField) ?? false}
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
