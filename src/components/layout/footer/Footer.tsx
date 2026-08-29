export const Footer: React.FC = () => {
  return (
    <footer className="border-border bg-background border-t">
      <div className="container flex items-center justify-center px-6 py-12">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Khoa Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
