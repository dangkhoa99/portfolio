import DOMPurify from 'isomorphic-dompurify';

import { homeData, Menu, Socials } from '@/common';
import { LinkButton } from '@/components/core/button';
import { SectionTitle } from '@/components/core/common';
import { FileUser } from 'lucide-react';
import { CursorBlinker } from './CursorBlinker';
import { TextAnimation } from './TextAnimation';

export const Home: React.FC = () => {
  const cvUrl = process.env.NEXT_PUBLIC_CV_URL;

  return (
    <section id={Menu.HOME} className="flex flex-col gap-3">
      <SectionTitle
        subtitle="👋 Hello!"
        title={
          <>
            {`I'm `}
            <TextAnimation />
            <CursorBlinker />
          </>
        }
      />

      <div className="text-muted-foreground flex flex-col gap-3 text-justify text-base">
        {homeData.descriptions.map((desc, index) => {
          return (
            <span key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }} />
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        {Socials.options.map((social) => {
          const IconComponent = social.icon;

          return (
            <LinkButton
              key={social.id}
              variant="soft"
              size="action"
              title={social.title}
              aria-label={social.title}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer">
              <IconComponent aria-hidden size={16} />
              {social.title}
            </LinkButton>
          );
        })}

        {!!cvUrl && (
          <LinkButton
            variant="soft"
            size="action"
            title="View my CV"
            aria-label="View my CV"
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer">
            <FileUser aria-hidden size={16} />
            My CV
          </LinkButton>
        )}
      </div>
    </section>
  );
};
