import SearchInput from "./SearchInput";
import FieldTypes from "./FieldTypes";
import FieldTemplates from "./FieldTemplates";
import Box from "@mui/material/Box";
import Droppable from "./Droppable";

export default function FieldsLibrary({
  droppableId,
  libraryQuestions,
}: {
  droppableId: string;
  libraryQuestions: any[];
}) {
  return (
    <div>
      <section>
        <Box sx={{ p: 0.5, m: 0.5 }}>
          <h2>Field Library</h2>
          <SearchInput />
        </Box>
      </section>
      <section>
        <Box sx={{ p: 0.5, m: 0.5 }}>
          <Droppable droppableId={droppableId} isDropDisabled={true}>
            {(provided) => (
              <div ref={provided.innerRef}>
                <FieldTypes libraryQuestions={libraryQuestions} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Box>
        <Box sx={{ p: 0.5, m: 0.5 }}>
          <FieldTemplates />
        </Box>
      </section>
    </div>
  );
}
