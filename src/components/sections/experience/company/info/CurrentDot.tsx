export const CurrentDot: React.FC = () => {
  return (
    <span className="relative flex items-center justify-center">
      <span className="bg-primary absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-50" />
      <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
      <span className="sr-only">Current Employer</span>
    </span>
  );
};
