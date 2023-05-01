import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Home - Netflix",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={inter.style} className="h-[200vh] bg-brandBlack">
        <Header />
        <main className="overflow-y-scroll relative">{children}</main>
        <footer className="text-center text-xs text-neutral-300 py-8">
          &copy; {new Date().getFullYear()} cs.dev for Netflix, Inc.
        </footer>
      </body>
    </html>
  )
}
