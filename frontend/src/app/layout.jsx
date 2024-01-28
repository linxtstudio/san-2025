import { Poppins } from 'next/font/google';
import '@/style/globals.css';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'SAN 2024 - The Most Anticipated Social Dance Gathering In Indonesia',
  description:
    'The highly awaited dance extravaganza that promises to be a spellbinding fusion of artistry, rhythm, and sheer spectacle of afro latin dances in Indonesia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
