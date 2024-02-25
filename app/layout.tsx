// "use client"
import { Metadata } from "next"
import Navigation from "../front/component/navigation"
import Footer from "../front/component/footer"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../front/component/style/global.css'

export const metadata: Metadata = {
  title: {
    template: "%s | ActorArchive",
    default: "ActorArchive",
  },
  description: 'Uncover the best in cinema with our exclusive actor rankings. Dive into profiles of over 10,000 actors and see who leads in cinematic excellence.',
  keywords: "actor rankings, best actors, movie ratings, cinema excellence, top movie stars, film industry, actor scores",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/actorachive-favicon.ico" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
