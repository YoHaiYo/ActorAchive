// export const metadata = {
//   title: 'About-us',
// }
import Navigation from "../../../../front/component/navigation"
import Footer from "../../../../front/component/footer"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}