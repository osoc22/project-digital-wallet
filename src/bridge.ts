import Ajv from "ajv";
import addFormats from "ajv-formats";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  strict: true,
  keywords: ["uniforms", "options"],
});

addFormats(ajv);

const createValidator = (schema: object) => {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
};

export const createBridge = (schema: object) =>
  new JSONSchemaBridge(schema, createValidator(schema));
