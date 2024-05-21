import Nav from './(components)/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticketing App',
  description: 'A ticketing application built using Next.js, Tailwind CSS and MongoDB.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Nav />
        { children }
      </body>
    </html>
  )
}
