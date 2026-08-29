import { IProject } from '@/common';
import { ProjectImages } from './images';
import { UrlBtn } from './UrlBtn';

interface IProps extends IProject {}

export const ProjectActions: React.FC<IProps> = (props) => {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-11 flex items-center justify-end gap-2">
      <ProjectImages {...props} />
      <UrlBtn {...props} />
    </div>
  );
};
