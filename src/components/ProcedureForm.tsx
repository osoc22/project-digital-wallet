import { Typography } from "@mui/material";
import { JSONSchemaType } from "ajv";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DeepPartial } from "uniforms";
import { AutoFields, AutoForm, ErrorsField, SubmitField } from "uniforms-mui";
import { createBridge } from "../bridge";
import { categories, Procedure, useProcedures } from "../ProcedureProvider";

const schema: JSONSchemaType<Omit<Procedure, "components">> = {
  title: "Procedure",
  type: "object",
  properties: {
    name: { type: "string" },
    description: { type: "string", minLength: 10 },
    category: {
      type: "string",
      options: categories.map((c) => ({ label: c, value: c })),
    },
  },
  required: ["name", "description", "category"],
};

export default function ProcedureForm() {
  const { createProcedure } = useProcedures();
  const navigate = useNavigate();

  const submit = useCallback(
    (procedure: Procedure) => {
      createProcedure(procedure);
      navigate("design");
    },
    [navigate, createProcedure]
  );

  return (
    <AutoForm
      schema={createBridge(schema)}
      onSubmit={(data: DeepPartial<Procedure>) => submit(data as Procedure)}
    >
      <Typography variant="h4" component="h1" mb={2}>
        Create a new procedure
      </Typography>
      <AutoFields />
      <ErrorsField />
      <SubmitField />
    </AutoForm>
  );
}
