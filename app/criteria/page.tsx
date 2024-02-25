/// app/page.tsx
export const metadata = {
  title: "Criteria"
}
import "./style/style.css"
import InfoCard from "../../front/component/infoCard"


export default function Page() {
  return <section className="page-criteria">
    <h2 className="text-center text-white mb-5">Criteria for calculating scores</h2>

    <InfoCard index={1}
      title={"How is the Rating score calculated?"}
      desc="It is calculated as the average rating of all films in which the actor appeared."
    />
    <InfoCard index={2}
      title={"How is the Votes score calculated?"}
      desc="It is calculated as the number of votes for all films in which the actor appeared."
    />
    <InfoCard index={3}
      title={"How is the Personal popularity score calculated?"}
      desc="The Personal Popularity score is calculated based on the actor popularity metrics in the TMDB."
    />
    <InfoCard index={4}
      title={"How is the Movies score calculated?"}
      desc="It is calculated as the number of all the films in which the actor appeared."
    />
    <InfoCard index={5}
      title={"How is the Total Popularity score calculated?"}
      desc="It is calculated as the sum of the popularity of all the films in which the actor appeared."
    />
    <InfoCard index={6}
      title={"How is the Total score calculated?"}
      desc="It is calculated by summing all five indicators above at the appropriate rate."
    />

  </section>

}