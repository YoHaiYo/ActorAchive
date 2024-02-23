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
      title={"How do you calculate the total score?"}
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    />
    <InfoCard index={2}
      title={"How do you calculate the total score?"}
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    />
    <InfoCard index={3}
      title={"How do you calculate the total score?"}
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      "
    />

  </section>

}