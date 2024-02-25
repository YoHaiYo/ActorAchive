/// app/page.tsx
export const metadata = {
  title: "About"
}

import { BoxArrowInUpRight } from "react-bootstrap-icons"
import InfoCard from "../../front/component/infoCard"
import "./style/style.css"


export default function Page() {
  return <section className="page-about">
    <h2 className="text-center text-white mb-5">About Actor Archive</h2>
    <InfoCard index={"Overview"}
      title={"This project was planned with the focus on what criteria to calculate the best actor."}
      desc="To do so, the actors' scores were scored by combining objective scores."
    />
    <InfoCard index={"Project size"}
      title={"This project is a private project."}
      desc="Yes, it was purely made by one person"
    />
    <InfoCard index={"Technology used"}
      title={"NextJs14, TypeScript, SCSS"}
      desc="It is a project built using relatively recent web technologies such as Nextjs14, TypeScript, and scss."
    />
    <InfoCard index={"API"}
      title={"TMDB"}
      desc="This project used the API of the TMDB."
    />

    <div className="infocard">
      <div className="infocard-container">
        <div className="infocard-width">
          <div className="infocard-index">
            SourceCode
          </div>
          <div className="infocard-content">
            <div className="infocard-title">
              Please refer to GitHub address below
            </div>
            <div className="infocard-description">

              <a href="https://github.com/YoHaiYo/ActorArchive"><BoxArrowInUpRight className="mx-1" />https://github.com/YoHaiYo/ActorArchive</a>
            </div>
          </div>
        </div>
      </div>
      <div className="infocard-divider"></div>
    </div>

  </section>
}