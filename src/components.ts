import { Component } from "./ProcedureProvider";

export const contactDetails: Omit<Component, "id"> = {
  name: "Contact details",
  properties: {
    email: { type: "string" },
    repeatEmail: { type: "string", const: { $data: "1/email" } },
    phone: { type: "string" },
  },
  required: ["email", "repeatEmail", "phone"],
};

export const theftInfo: Omit<Component, "id"> = {
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

export const bikeInfo: Omit<Component, "id"> = {
  name: "Bike info",
  properties: {
    bikeBrand: {
      type: "string",
    },
  },
  required: ["bikeBrand"],
};
