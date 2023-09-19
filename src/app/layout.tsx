import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test Google Sign In',
  description: 'Testing Google Sign In on Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
