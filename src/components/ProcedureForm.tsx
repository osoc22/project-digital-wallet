import { Typography } from "@mui/material";
import { JSONSchemaType } from "ajv";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DeepPartial } from "uniforms";
import { AutoFields, AutoForm, ErrorsField, SubmitField } from "uniforms-mui";
import { createBridge } from "../bridge";
import { Step } from "../steps";

const categories = ["Economy", "Housing", "Employment", "Justice"] as const;

export interface Procedure {
  name: string;
  category: typeof categories[number];
  description: string;
  steps: Step[];
}

const schema: JSONSchemaType<Omit<Procedure, "steps">> = {
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
  const navigate = useNavigate();

  const submit = useCallback(
    (data: DeepPartial<Procedure>) => {
      console.log(data);
      navigate("design");
    },
    [navigate]
  );

  return (
    <AutoForm schema={createBridge(schema)} onSubmit={submit}>
      <Typography variant="h4" component="h1" mb={2}>
        Create a new procedure
      </Typography>
      <AutoFields />
      <ErrorsField />
      <SubmitField />
    </AutoForm>
  );
}
