import '@/app/ui/global.css';
import { Metadata } from 'next';
import { AppFooter } from '@/app/ui/AppFooter';
import { DrawerAppBar } from '@/app/ui/DrawerAppBar';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DrawerAppBar>
        {children}
        </DrawerAppBar>
        <AppFooter />
      </body>
    </html>
  );
}
