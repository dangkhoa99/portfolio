import Link from 'next/link';

import { Button } from '@/components/ui/button';

export type TLinkButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'render' | 'nativeButton'
> &
  Pick<React.ComponentProps<typeof Link>, 'href' | 'target' | 'rel' | 'prefetch' | 'replace'>;

export const LinkButton: React.FC<TLinkButtonProps> = (props) => {
  const { href, target, rel, prefetch, replace, ...restButtonProps } = props;

  return (
    <Button
      {...restButtonProps}
      nativeButton={false}
      render={<Link href={href} target={target} rel={rel} prefetch={prefetch} replace={replace} />}
    />
  );
};
