import { skillIcon, Skills } from '@/common';
import { Badge } from '@/components/ui/badge';

export interface ISkillListProps {
  data: string[];
}

export const SkillList: React.FC<ISkillListProps> = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-wrap gap-2">
      {data.map((skill) => {
        return (
          <Badge
            key={skill}
            variant="outline"
            className="bg-card hover:border-border-hover h-auto gap-1 rounded-sm px-2 py-1 font-semibold transition-colors">
            {skillIcon?.[skill]}
            {Skills.translate?.[skill]}
          </Badge>
        );
      })}
    </div>
  );
};
