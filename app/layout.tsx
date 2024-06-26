import type { Metadata } from 'next'
import { Chivo as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import './globals.css'

const sans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Empresta Tech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          sans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
