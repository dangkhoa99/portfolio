import Image from 'next/image';
import Link from 'next/link';

import { Menu, mySkills } from '@/common';
import { SectionTitle, SkillList } from '@/components/core/common';

export const Skill: React.FC = () => {
  const wakaTimeId = process.env.NEXT_PUBLIC_WAKA_TIME_ID;

  return (
    <section id={Menu.SKILL} className="border-border mt-6 flex flex-col gap-2 border-t py-4">
      <SectionTitle
        subtitle="😁 What can I do?"
        title={
          <div className="flex flex-col flex-wrap justify-between gap-1 md:flex-row md:items-center">
            Skills
            {!!wakaTimeId && (
              <Link
                className="relative h-5 w-50"
                href={`https://wakatime.com/@${wakaTimeId}`}
                title="View my WakaTime profile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my WakaTime profile">
                <Image
                  src={`https://wakatime.com/badge/user/${wakaTimeId}.svg`}
                  alt="Total time coded since joining WakaTime"
                  fill
                  unoptimized
                  loading="lazy"
                />
              </Link>
            )}
          </div>
        }
      />

      <p className="text-muted-foreground text-justify text-sm">
        {`These are the technologies and skills I’ve learned or used in my projects. I’m always curious and eager to explore new tools, so this list will keep evolving as I grow in my career.`}
      </p>

      <div className="flex flex-col gap-6">
        {mySkills.map((category) => {
          return (
            <div key={category.id} className="flex flex-col gap-1">
              <div>
                <span className="text-muted-foreground text-[10px] font-medium tracking-widest uppercase">{`< ${category.title} />`}</span>
              </div>

              <SkillList data={category.skills} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
