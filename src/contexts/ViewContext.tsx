import { createContext, useContext } from 'react';

type View = 'systems' | 'prompts';

interface ViewContextValue {
  switchView: (targetView: View, sectionId?: string) => void;
}

export const ViewContext = createContext<ViewContextValue>({
  switchView: () => {},
});

export function useViewSwitch() {
  return useContext(ViewContext);
}
