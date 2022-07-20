import { Stack, Typography } from "@mui/material";
import { JSONSchemaType } from "ajv";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DeepPartial } from "uniforms";
import {
  AutoField,
  AutoForm,
  ErrorsField,
  LongTextField,
  SubmitField,
} from "uniforms-mui";
import { createBridge } from "../bridge";
import {
  categories,
  Procedure,
  useProcedures,
} from "../contexts/ProcedureProvider";

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
  const { resetProcedure } = useProcedures();
  const navigate = useNavigate();

  const submit = useCallback(
    (procedure: Procedure) => {
      resetProcedure({ ...procedure, components: [] });
      navigate("design");
    },
    [navigate, resetProcedure]
  );

  return (
    <AutoForm
      schema={createBridge(schema)}
      onSubmit={(data: DeepPartial<Procedure>) => submit(data as Procedure)}
    >
      <Stack flexDirection="column" width="600px">
        <Typography variant="h4" component="h1" fontWeight={900} mb={2}>
          Create a new procedure
        </Typography>
        <Stack spacing={2} flexDirection="column">
          <AutoField name="name" />
          <AutoField name="category" />
          <LongTextField name="description" rows={8} />
          <ErrorsField />
          <SubmitField label="Create" sx={{ alignSelf: "flex-end" }} />
        </Stack>
      </Stack>
    </AutoForm>
  );
}
