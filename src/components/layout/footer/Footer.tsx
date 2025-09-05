import { BackToTop } from '@/components/core/button';

export const Footer: React.FC = () => {
  return (
    <footer className="border-divider bg-background border-t">
      <div className="container flex items-center justify-center p-48 md:justify-between">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Khoa Nguyen. All rights reserved.
        </p>

        <BackToTop />
      </div>
    </footer>
  );
};
