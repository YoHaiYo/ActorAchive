import SearchActor from "../front/component/searchActor"
import Navigation from "../front/component/navigation"
import { Metadata } from "next"

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
      <body>
        <Navigation />
        <SearchActor />
        {children}
      </body>
    </html>
  )
}
