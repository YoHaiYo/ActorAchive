/// app/page.tsx
import "./style/style.css"

export default function Page() {
  return <div id="home">
    <div className="position-absolute bottom-0 end-0 start-0">
      <h2>Who is Best Actor?</h2>
      <p>"Discover the stars who truly shine.
        <br />
        welcome to the only platform where the greatest actors are celebrated, not just through popularity, but by genuine merit.
        <br />
        With our unique, data-driven approach, we redefine excellence in cinema, spotlighting the talents that set the bar.
        <br />
        Join us in celebrating the artistry that transcends the screen, where every accolade is earned, and every star truly deserves their place in the spotlight."</p>
      <button className="mt-3">Show Right now</button>
    </div>
  </div>
}