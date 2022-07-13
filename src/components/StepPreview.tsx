import { Button, Stack } from "@mui/material";
import { useMemo } from "react";
import { AutoFields, AutoForm, ErrorsField } from "uniforms-mui";
import { createBridge } from "../bridge";

interface Props {
  schema: object;
  onSubmit: (data: any) => void;
}

export default function StepPreview({ schema, onSubmit }: Props) {
  const jsonSchema = useMemo(() => {
    return {
      type: "object",
      properties: schema,
      required: Object.keys(schema),
    };
  }, [schema]);

  return (
    <Stack justifyContent="space-between" height="65%">
      <AutoForm schema={createBridge(jsonSchema)} onSubmit={onSubmit}>
        <AutoFields />
        <ErrorsField />
      </AutoForm>
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Button variant="contained">Back</Button>
        <Button variant="contained">Next</Button>
      </Stack>
    </Stack>
  );
}
