import BestSellers from "../components/home/BestSellers.jsx"
import CollectionGrid from "../components/home/CollectionGrid.jsx"
import FeatureStrip from "../components/home/FeatureStrip.jsx"
import Hero from "../components/home/Hero.jsx"
import LookbookBanner from "../components/home/LookbookBanner.jsx"
import AboutPage from "./AboutPage.jsx"
import TeamPage from "./TeamPage.jsx"

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <div id="about">
        <AboutPage />
      </div>
      <div id="team">
        <TeamPage />
      </div>
      <div id="home">
        <Hero />
        <FeatureStrip />
        <CollectionGrid />
        <BestSellers />
        <LookbookBanner />
      </div>
    </div>
  )
}
