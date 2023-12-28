import { Poppins } from 'next/font/google'
import '@/style/globals.css'
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'],  })

export const metadata = {
  title: 'SAN 2024',
  description: 'Dance dance dance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
