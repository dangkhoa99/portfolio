import { LinkButton } from '@/components/core/button';

export default function NotFoundPage() {
  return (
    <div className="bg-background fixed inset-0 z-9999 flex flex-col items-center justify-center gap-3">
      <h2 className="font-heading text-2xl md:text-4xl">404 | Page Not Found</h2>

      <p className="text-base">{`The page you are looking for doesn't exist.`}</p>

      <LinkButton
        variant="soft-outline"
        size="action"
        title="Back to HomePage"
        aria-label="Back to homepage"
        href="/">
        Back To HomePage
      </LinkButton>
    </div>
  );
}
