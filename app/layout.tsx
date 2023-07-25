import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google'

import ModalProvider from "@/components/modal-provider";
import ToasterProvider from "@/components/toaster-provider";
import CrispProvider from "@/components/crisp-provider";

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
        <ModalProvider />
        <ToasterProvider />
        {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
