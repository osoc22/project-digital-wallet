export interface Step {
  name: string;
  properties: object;
}

export const contactDetails: Step = {
  name: "Contact details",
  properties: {
    email: { type: "string" },
    repeatEmail: { type: "string", const: { $data: "1/email" } },
    phone: { type: "string" },
  },
};

export const theftInfo: Step = {
  name: "Theft info",
  properties: {
    // theftDate: {
    //   type: "string",
    //   format: "date-time",
    // },
    theftLocation: {
      type: "string",
    },
  },
};

export const bikeInfo: Step = {
  name: "Bike info",
  properties: {
    bikeBrand: {
      type: "string",
    },
  },
};
