import { CodeXml } from 'lucide-react';

import { TExperiencePosition } from '@/common';
import { AccordionToggleIcon } from '@/components/core/common';
import { AccordionTrigger } from '@/components/ui/accordion';
import { getPeriodFormat } from '@/utils/formatted.util';

interface IProps extends TExperiencePosition {}

export const PositionHeading: React.FC<IProps> = (props) => {
  const { title, periodFrom, periodTo, type } = props;

  const period = getPeriodFormat({ from: periodFrom, to: periodTo });

  const subtitle = type ? `${type} | ${period}` : period;

  return (
    <AccordionTrigger
      icon={<AccordionToggleIcon />}
      className="items-center gap-3 rounded-none py-0 hover:no-underline"
      aria-label={`${title} details`}>
      <div
        aria-hidden
        className="border-border bg-card z-10 mx-1 flex size-6 shrink-0 items-center justify-center self-start rounded-full border">
        <CodeXml size={12} className="text-primary" />
      </div>

      <div className="flex flex-col text-left">
        <h6 className="text-base font-semibold">{title}</h6>

        <p className="text-muted-foreground text-xs font-medium">{subtitle}</p>
      </div>
    </AccordionTrigger>
  );
};
