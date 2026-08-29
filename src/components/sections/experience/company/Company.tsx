import { TExperience } from '@/common';
import { Accordion } from '@/components/ui/accordion';
import { Position } from '../position';
import { CompanyActions } from './actions';
import { CompanyInfo } from './info';

interface IProps extends TExperience {}

export const Company: React.FC<IProps> = (props) => {
  const { positions } = props;

  const defaultValue = positions.filter((position) => position.isExpanded).map(({ id }) => id);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <CompanyInfo {...props} />
        <CompanyActions {...props} />
      </div>

      <Accordion
        multiple
        defaultValue={defaultValue}
        className="before:bg-border relative gap-3 before:absolute before:left-4 before:h-full before:w-px before:content-['']">
        {positions.map((position) => {
          return <Position key={position.id} {...position} />;
        })}
      </Accordion>
    </div>
  );
};
