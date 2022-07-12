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
    <AutoForm schema={createBridge(jsonSchema)} onSubmit={onSubmit}>
      <AutoFields />
      <ErrorsField />
    </AutoForm>
  );
}
