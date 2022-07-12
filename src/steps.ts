export const contactDetails = {
  email: { type: "string" },
  repeatEmail: { type: "string", const: { $data: "1/email" } },
  phone: { type: "string" },
};

export const theftInfo = {
  theftDate: {
    type: "string",
    format: "date-time",
  },
  theftLocation: {
    type: "string",
  },
};
