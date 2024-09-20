import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar></Navbar>
        <main className='max-w-3xl mx-auto py-20'>{children}</main>
      </body>
    </html>
  );
}
