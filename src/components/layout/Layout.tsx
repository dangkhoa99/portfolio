import { ScrollToTop } from '@/components/core/button';
import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <>
      <LayoutBackground />
      <BackgroundEffect />
      <Header />
      <main className="container my-8 flex-grow">{children}</main>
      <Footer />

      <ScrollToTop offset={200} />
    </>
  );
};

const LayoutBackground: React.FC = () => {
  return (
    <div className="bg-background absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(90deg,var(--layout-grid)_1px,transparent_1px),linear-gradient(var(--layout-grid)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
  );
};

const BackgroundEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="to-primary/10 from-background/10 absolute -top-50 -right-50 h-100 w-100 rounded-full bg-gradient-to-br blur-3xl" />
    </div>
  );
};
