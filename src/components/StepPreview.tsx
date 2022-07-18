import { Button, Stack } from "@mui/material";
import { useCallback, useMemo } from "react";
import { AutoFields, AutoForm, ErrorsField } from "uniforms-mui";
import { createBridge } from "../bridge";
import { Step } from "../steps";

type Indexable = {
  [key: string]: any;
};

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

  const transform = useCallback(
    (mode: "form" | "validate" | "submit", model: Indexable) => {
      Object.keys(model).forEach((k) => {
        if (isNaN(Date.parse(model[k]))) return;

        if (mode === "form") model[k] = new Date(model[k]);
        else model[k] = model[k].toISOString();
      });

      return model;
    },
    []
  );

  return (
    <Stack justifyContent="space-between" height="50%">
      <AutoForm
        schema={createBridge(jsonSchema)}
        onSubmit={next}
        ref={(ref) => (formRef = ref)}
        modelTransform={transform}
        validate="onSubmit"
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
