import { Button, Stack } from "@mui/material";
import { useMemo } from "react";
import { AutoFields, AutoForm, ErrorsField } from "uniforms-mui";
import { createBridge } from "../bridge";
import { Step } from "../steps";

interface Props {
  step: Step;
  onSubmit: (data: any) => void;
}

export default function StepPreview({ step, onSubmit }: Props) {
  const jsonSchema = useMemo(() => {
    return {
      type: "object",
      title: step.name,
      properties: step.properties,
      required: Object.keys(step.properties),
    };
  }, [step]);

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
