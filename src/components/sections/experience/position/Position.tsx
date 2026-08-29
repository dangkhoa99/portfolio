import { TExperiencePosition } from '@/common';
import { AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { PositionCollapse } from './PositionCollapse';
import { PositionHeading } from './PositionHeading';

interface IProps extends TExperiencePosition {}

export const Position: React.FC<IProps> = (props) => {
  const { id } = props;

  return (
    <AccordionItem
      value={id}
      className="last:before:bg-background relative not-last:border-b-0 last:before:absolute last:before:left-0 last:before:h-full last:before:w-5">
      <PositionHeading {...props} />

      <AccordionContent className="pt-3 pb-0">
        <PositionCollapse {...props} />
      </AccordionContent>
    </AccordionItem>
  );
};
