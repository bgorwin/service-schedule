import '../globals.css';
import { Montserrat } from '@next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
const montserrat = Montserrat({
  // Specifying weight is only required for
  // non-variable fonts.
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}