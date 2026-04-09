import type { ReactNode } from 'react';
import { useViewSwitch } from '../contexts/ViewContext';

type View = 'systems' | 'prompts';

interface CrossViewLinkProps {
  targetView: View;
  sectionId?: string;
  children: ReactNode;
}

export function CrossViewLink({ targetView, sectionId, children }: CrossViewLinkProps) {
  const { switchView } = useViewSwitch();
  return (
    <button
      type="button"
      onClick={() => switchView(targetView, sectionId)}
      className="cursor-pointer font-semibold underline underline-offset-2 transition-opacity hover:opacity-70 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    >
      {children}
    </button>
  );
}
