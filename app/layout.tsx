// "use client"
import { Metadata } from "next"
import Navigation from "../front/component/navigation"
import Footer from "../front/component/footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../front/component/style/global.css'

export const metadata: Metadata = {
  title: {
    template: "%s | ActorAchive",
    default: "ActorAchive",
  },
  description: 'ActorAchive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
