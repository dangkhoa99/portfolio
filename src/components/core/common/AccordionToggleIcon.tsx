import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';

export const AccordionToggleIcon: React.FC = () => {
  return (
    <span
      aria-hidden
      className="group-hover/accordion-trigger:bg-primary/5 group-hover/accordion-trigger:text-primary ml-auto flex size-8 shrink-0 items-center justify-center rounded-full transition-colors">
      <ChevronsUpDown className="size-4 group-aria-expanded/accordion-trigger:hidden" />
      <ChevronsDownUp className="hidden size-4 group-aria-expanded/accordion-trigger:inline" />
    </span>
  );
};
