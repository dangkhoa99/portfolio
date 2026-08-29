import DOMPurify from 'isomorphic-dompurify';

import { IProject } from '@/common';
import { SkillList } from '@/components/core/common';

interface IProps extends IProject {}

export const ProjectCollapse: React.FC<IProps> = (props) => {
  const { description, role, responsibilities, skills } = props;

  return (
    <div className="border-border border-t border-dashed">
      <div className="flex flex-col gap-3 p-3">
        <ul className="flex flex-col gap-2">
          {description && (
            <li className="text-base">
              <b className="text-muted-foreground font-medium underline">Description:</b>{' '}
              {description}
            </li>
          )}

          {role && (
            <li className="text-base">
              <b className="text-muted-foreground font-medium underline">Role:</b> {role}
            </li>
          )}

          {responsibilities && (
            <li className="text-base">
              <b className="text-muted-foreground font-medium underline">Responsibilities:</b>
            </li>
          )}

          <li>
            <ul className="flex flex-col gap-2 pl-3">
              {responsibilities?.map((desc, idx) => {
                return (
                  <li key={idx} className="flex gap-2 text-base">
                    <span className="select-none">-</span>
                    <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }} />
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>

        {!!skills?.length && <SkillList data={skills} />}
      </div>
    </div>
  );
};
