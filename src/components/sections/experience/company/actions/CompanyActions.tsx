import { TExperience } from '@/common';
import { CompanyUrl } from './CompanyUrl';

interface IProps extends TExperience {}

export const CompanyActions: React.FC<IProps> = (props) => {
  return (
    <div className="flex items-center gap-1">
      <CompanyUrl {...props} />
    </div>
  );
};
