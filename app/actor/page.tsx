/// app/page.tsx

export const metadata = {
  title: "All"
}

import ActorsList from "../../front/component/actorsList"
export default function Page() {
  return <div>
    <ActorsList />
  </div>
}