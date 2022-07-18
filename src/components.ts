import { Component } from "./contexts/ProcedureProvider";

export const contactDetails: Component = {
  id: "57ddc425-7d98-4ac2-b4d1-8c8c2410ed9a",
  name: "Contact details",
  properties: {
    email: { type: "string" },
    repeatEmail: { type: "string", const: { $data: "1/email" } },
    phone: { type: "string" },
  },
  required: ["email", "repeatEmail", "phone"],
};

export const theftInfo: Component = {
  id: "d0f0b40b-9c58-42c8-89f6-da3f26f6e398",
  name: "Theft info",
  properties: {
    theftDate: {
      type: "string",
      format: "date-time",
    },
    theftLocation: {
      type: "string",
    },
  },
  required: ["theftDate", "theftLocation"],
};

export const bikeInfo: Component = {
  id: "a4cdc80f-411c-4710-9efe-a78f5b94fc8a",
  name: "Bike info",
  properties: {
    bikeBrand: {
      type: "string",
    },
  },
  required: ["bikeBrand"],
};
