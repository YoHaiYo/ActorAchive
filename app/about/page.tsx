/// app/page.tsx
export const metadata = {
  title: "About"
}

import InfoCard from "../../front/component/infoCard"
import "./style/style.css"

export default function Page() {
  return <section className="page-about">
    <h2 className="text-center text-white mb-5">About Actor Achive</h2>
    <InfoCard index={"Overview"}
      title={"This project is a personal project and ...."}
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    />
    <InfoCard index={"Github"}
      title={"https://github.com/YoHaiYo"}
      desc=""
    />

  </section>
}