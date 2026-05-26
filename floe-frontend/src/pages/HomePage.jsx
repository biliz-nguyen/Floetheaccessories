import BestSellers from "../components/home/BestSellers.jsx"
import CollectionGrid from "../components/home/CollectionGrid.jsx"
import FeatureStrip from "../components/home/FeatureStrip.jsx"
import Hero from "../components/home/Hero.jsx"
import LookbookBanner from "../components/home/LookbookBanner.jsx"

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <FeatureStrip />
      <CollectionGrid />
      <BestSellers />
      <LookbookBanner />
    </div>
  )
}
