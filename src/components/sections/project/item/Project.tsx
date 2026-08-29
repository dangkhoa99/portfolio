import { IProject } from '@/common';
import { AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { ProjectCollapse } from './ProjectCollapse';
import { ProjectHeading } from './heading';

interface IProps extends IProject {}

export const Project: React.FC<IProps> = (props) => {
  const { id } = props;

  return (
    <AccordionItem value={id} className="border-b not-last:border-b">
      <ProjectHeading {...props} />

      <AccordionContent className="pb-0">
        <ProjectCollapse {...props} />
      </AccordionContent>
    </AccordionItem>
  );
};
