import type { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import Header from "@/components/header"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
})

export const metadata: Metadata = {
  title: "BlackTools",
  description: "Coleção de ferramentas para escalar a sua operação!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${ubuntu.variable} antialiased`}>
        <Header />
        {children}
        
        </body>
    </html>
  )
}

