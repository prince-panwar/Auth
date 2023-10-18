import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ContractProvider } from './Context/ContractContext'
import Navbar from './components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ContractProvider>
        <body className={inter.className}>{children}</body>
      </ContractProvider>
    </html>
  )
}
