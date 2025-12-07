import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webtap',
  description: 'Agencia de Desarrollo Web',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
