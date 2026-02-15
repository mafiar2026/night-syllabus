import React from 'react'
import './styles.css'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Hind_Siliguri } from 'next/font/google'
import { Toaster } from 'sonner'
import FacebookPixel from '@/components/FacebookPixel'
// import { GoogleTagManager } from '@next/third-parties/google'

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
})

export const metadata = {
  description: 'Health Solutions',
  title: 'Health Solutions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hindSiliguri.className}>
      {/* <GoogleTagManager gtmId="GTM-KXTSKLLN" gtmScriptUrl='' /> */}

      <body className="overflow-x-hidden bg-black">
        <FacebookPixel />
        <Toaster />
        <main className="overflow-x-hidden"> {children}</main>
        <Footer />
      </body>
    </html>
  )
}
