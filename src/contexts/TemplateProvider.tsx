import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { templates } from "../components";
import { Component } from "./ProcedureProvider";

interface Context {
  componentTemplates: Component[];
  addComponentTemplate: (component: Omit<Component, "id">) => void;
  deleteComponentTemplateById: (id: string) => void;
}

const TemplateContext = createContext<Context>({} as Context);
export const useTemplates = () => useContext(TemplateContext);

export const TemplatesProvider = ({ children }: { children: ReactNode }) => {
  const [componentTemplates, setComponentTemplates] = useState<Component[]>(templates);

  const addComponentTemplate = useCallback(
    (component: Omit<Component, "id">) =>
      setComponentTemplates([...componentTemplates, { ...component, id: uuidv4() }]),
    [componentTemplates]
  );

  const deleteComponentTemplateById = useCallback(
    (id: string) => {
      setComponentTemplates(componentTemplates.filter((c) => c.id !== id));
    },
    [componentTemplates]
  );

  const context: Context = useMemo(
    () => ({
      componentTemplates,
      addComponentTemplate,
      deleteComponentTemplateById,
    }),
    [componentTemplates, addComponentTemplate, deleteComponentTemplateById]
  );

  return <TemplateContext.Provider value={context}>{children}</TemplateContext.Provider>;
};
