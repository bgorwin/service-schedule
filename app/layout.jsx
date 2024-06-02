import '../globals.css';
import { Montserrat } from '@next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
import { GeistSans, GeistMono } from 'geist/font'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}