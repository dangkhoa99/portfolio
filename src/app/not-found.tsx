import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="bg-background fixed inset-0 z-9999 flex flex-col items-center justify-center gap-12">
      <h2 className="text-2xl md:text-4xl">404 | Page Not Found</h2>

      <p className="text-base">{`The page you are looking for doesn't exist.`}</p>

      <Link
        title="Back to HomePage"
        href="/"
        className="button outlined"
        aria-label="Back to homepage">
        Back To HomePage
      </Link>
    </div>
  );
}
