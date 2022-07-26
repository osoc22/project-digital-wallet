import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const categories = ["Economy", "Housing", "Employment", "Justice"] as const;

export interface Component {
  id: string;
  name: string;
  properties: { [key: string]: any };
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
  selectedComponent?: Component;
  resetProcedure: (procedure: Procedure) => void;
  addComponent: (component: Omit<Component, "id">) => void;
  updateComponent: (component: Component) => void;
  deleteComponentById: (id: string) => void;
  selectComponent: (id: string) => void;
}

const ProcedureContext = createContext<Context>({} as Context);
export const useProcedures = () => useContext(ProcedureContext);

export const ProcedureProvider = ({ children }: { children: ReactNode }) => {
  const [procedure, setProcedure] = useState<Procedure | null>(null);
  const [selectedComponentId, setSelectedComponentId] = useState<string>();
  const selectedComponent = useMemo(
    () => procedure?.components?.find(c => c.id === selectedComponentId),
    [procedure?.components, selectedComponentId]
  );

  const resetProcedure = useCallback((procedure: Procedure) => {
    setProcedure({ ...procedure, components: procedure.components?.map(c => ({ ...c, id: uuidv4() })) ?? [] });
  }, []);

  const addComponent = useCallback((component: Omit<Component, "id">) => {
    const newComponent: Component = { ...component, id: uuidv4() };

    setProcedure(oldProcedure =>
      oldProcedure
        ? {
            ...oldProcedure,
            components: [...oldProcedure.components, newComponent]
          }
        : null
    );
  }, []);

  const updateComponent = useCallback((component: Component) => {
    setProcedure(oldProcedure =>
      oldProcedure
        ? {
            ...oldProcedure,
            components: [...oldProcedure.components.filter(c => c.id !== component.id), component]
          }
        : null
    );
  }, []);

  const deleteComponentById = useCallback((id: string) => {
    setProcedure(oldProcedure =>
      oldProcedure
        ? {
            ...oldProcedure,
            components: oldProcedure.components.filter(c => c.id !== id)
          }
        : null
    );
  }, []);

  const selectComponent = useCallback((id: string) => {
    setSelectedComponentId(id);
  }, []);

  return (
    <ProcedureContext.Provider
      value={{
        procedure,
        selectedComponent,
        resetProcedure,
        addComponent,
        updateComponent,
        deleteComponentById,
        selectComponent
      }}
    >
      {children}
    </ProcedureContext.Provider>
  );
};
