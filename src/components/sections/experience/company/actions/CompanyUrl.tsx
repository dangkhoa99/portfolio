import { ExternalLink } from 'lucide-react';

import { TExperience } from '@/common';
import { LinkButton } from '@/components/core/button';

interface IProps extends TExperience {}

export const CompanyUrl: React.FC<IProps> = (props) => {
  const { company } = props;

  if (!company.url) {
    return null;
  }

  return (
    <LinkButton
      variant="subtle"
      size="icon"
      title={`${company.name} Website`}
      aria-label={`${company.name} Website`}
      href={company.url}
      target="_blank"
      rel="noopener noreferrer">
      <ExternalLink />
    </LinkButton>
  );
};
