import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const categories = ["Economy", "Housing", "Employment", "Justice"] as const;

export interface Component {
  id: string;
  name: string;
  properties: object;
  required?: string[];
}

export interface Procedure {
  name: string;
  category: typeof categories[number];
  description: string;
  components: Component[];
}

interface Context {
  procedure: Procedure | null;
  createProcedure: (procedure: Procedure) => void;
  addComponent: (component: Omit<Component, "id">) => void;
}

const ProcedureContext = createContext<Context>({} as Context);
export const useProcedures = () => useContext(ProcedureContext);

export const ProcedureProvider = ({ children }: { children: ReactNode }) => {
  const [procedure, setProcedure] = useState<Procedure | null>(null);

  const createProcedure = useCallback((procedure: Procedure) => {
    setProcedure({ ...procedure, components: [] });
  }, []);

  const addComponent = useCallback((component: Omit<Component, "id">) => {
    const newComponent: Component = { ...component, id: uuidv4() };

    setProcedure((oldProcedure) =>
      oldProcedure ? { ...oldProcedure, components: [...oldProcedure.components, newComponent] } : null
    );
  }, []);

  const context: Context = useMemo(
    () => ({
      procedure,
      createProcedure,
      addComponent,
    }),
    [procedure, createProcedure, addComponent]
  );

  return <ProcedureContext.Provider value={context}>{children}</ProcedureContext.Provider>;
};
