import { IProject } from '@/common';
import { AccordionToggleIcon } from '@/components/core/common';
import { AccordionTrigger } from '@/components/ui/accordion';
import { getPeriodFormat } from '@/utils/formatted.util';
import { ProjectActions } from './actions';
import { ProjectLogo } from './ProjectLogo';

const ACTION_SLOT_WIDTH = 40;

interface IProps extends IProject {}

export const ProjectHeading: React.FC<IProps> = (props) => {
  const { title, periodFrom, periodTo, images, url } = props;

  const period = getPeriodFormat({ from: periodFrom, to: periodTo });

  const actionCount = (images?.length ? 1 : 0) + (url ? 1 : 0);

  return (
    <div className="relative flex items-center">
      <AccordionTrigger
        icon={<AccordionToggleIcon />}
        className="w-full items-center gap-0 rounded-none py-0 pr-3 hover:no-underline"
        aria-label={`${title} details`}>
        <ProjectLogo {...props} />

        <div className="border-border flex flex-1 flex-col border-l border-dotted p-3 text-left">
          <h6 className="text-base font-semibold">{title}</h6>

          <p className="text-muted-foreground text-xs font-medium">{period}</p>
        </div>

        <span aria-hidden style={{ width: actionCount * ACTION_SLOT_WIDTH }} />
      </AccordionTrigger>

      <ProjectActions {...props} />
    </div>
  );
};
