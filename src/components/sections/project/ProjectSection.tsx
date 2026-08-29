import { Menu, projectData } from '@/common';
import { SectionTitle } from '@/components/core/common';
import { Accordion } from '@/components/ui/accordion';
import { Project } from './item';

export const ProjectSection: React.FC = () => {
  const defaultValue = projectData.filter((project) => project.isExpanded).map(({ id }) => id);

  return (
    <section id={Menu.PROJECT} className="flex flex-col gap-6">
      <SectionTitle subtitle="👀 What I did?" title={'Projects'} />

      <Accordion multiple defaultValue={defaultValue}>
        {projectData.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </Accordion>
    </section>
  );
};
