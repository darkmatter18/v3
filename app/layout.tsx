import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arkadip',
  description: 'Softwre Engineer, DevOps, Cloud, AWS, Azure, GCP',
  appleWebApp: {
    capable: true,
    title: 'Arkadip',
    statusBarStyle: 'black-translucent'
  },
  applicationName: "Portfolio | Arkadip",
  authors: {
    name: "Arkadip Bhattacharya",
    url: "https://github.com/darkmatter18"
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={'bg-deep-blue'}>
          {children}
        </main>
      </body>
    </html>
  )
}
