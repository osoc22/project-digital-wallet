import { Button, Stack } from "@mui/material";
import { useMemo } from "react";
import { AutoFields, AutoForm, ErrorsField } from "uniforms-mui";
import { createBridge } from "../bridge";
import { Step } from "../steps";

interface Props {
  step: Step;
  part: number;
  back: () => void;
  next: (data: object) => void;
}

interface FormRef {
  submit: () => void;
}

export default function StepPreview({ step, part, back, next }: Props) {
  let formRef: FormRef | null = null;

  const jsonSchema = useMemo(() => {
    const { name, properties, required } = step;

    return {
      type: "object",
      title: name,
      properties,
      required,
    };
  }, [step]);

  return (
    <Stack justifyContent="space-between" height="50%">
      <AutoForm
        schema={createBridge(jsonSchema)}
        onSubmit={next}
        ref={(ref) => (formRef = ref)}
      >
        <h3>
          Part {part}: {step.name}
        </h3>
        <AutoFields />
        <ErrorsField />
      </AutoForm>
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Button variant="contained" onClick={back}>
          Back
        </Button>
        <Button variant="contained" onClick={() => formRef?.submit()}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
}
