import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppShell from '@/components/AppShell';

export const metadata = {
  title: { default: 'EKKKO — Where Ideas Echo', template: '%s — EKKKO' },
  description: 'A studio at the intersection of narrative, technology, and culture.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="bg-dots"></div>
        <div className="scroll-progress" id="scroll-progress"></div>
        <div className="custom-cursor" id="cursor"><div className="cursor-dot"></div><div className="cursor-ring"></div></div>
        <Header />
        <main><AppShell>{children}</AppShell></main>
        <Footer />
      </body>
    </html>
  );
}
