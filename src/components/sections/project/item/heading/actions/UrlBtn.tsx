import { ExternalLink } from 'lucide-react';

import { IProject } from '@/common';
import { LinkButton } from '@/components/core/button';

interface IProps extends IProject {}

export const UrlBtn: React.FC<IProps> = (props) => {
  const { url } = props;

  if (!url) {
    return null;
  }

  return (
    <LinkButton
      variant="subtle"
      size="icon"
      className="pointer-events-auto"
      title="Project Website"
      aria-label="Project Website"
      href={url}
      target="_blank"
      rel="noopener noreferrer">
      <ExternalLink />
    </LinkButton>
  );
};
