import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

export const categories = ["Economy", "Housing", "Employment", "Justice"] as const;

export interface Component {
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
  createProcedure: (data: Procedure) => void;
  addComponent: (component: Component) => void;
}

const ProcedureContext = createContext<Context>({} as Context);
export const useProcedures = () => useContext(ProcedureContext);

export const ProcedureProvider = ({ children }: { children: ReactNode }) => {
  const [procedure, setProcedure] = useState<Procedure | null>(null);

  const createProcedure = useCallback((data: Procedure) => {
    setProcedure({ ...data, components: [] });
  }, []);

  const addComponent = useCallback((component: Component) => {
    setProcedure((oldProcedure) =>
      oldProcedure ? { ...oldProcedure, components: [...oldProcedure.components, component] } : null
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
