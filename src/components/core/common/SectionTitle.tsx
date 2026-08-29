export interface ISectionTitleProps {
  subtitle: string;
  title: React.ReactNode;
}

export const SectionTitle: React.FC<ISectionTitleProps> = (props) => {
  const { subtitle, title } = props;

  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-medium uppercase">{subtitle}</p>
      <h2 className="font-heading text-2xl font-semibold">{title}</h2>
    </div>
  );
};
