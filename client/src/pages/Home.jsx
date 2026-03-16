import HeroSlider from "../components/HeroSlider";
import HeroCards from "../components/HeroCards";
import CompanyOverview from "../components/CompanyOverview";
import Infographics from"../components/Infographics";
import HighlightedProducts from "../components/HighlightedProducts";
import CompanyTimeline from"../components/CompanyTimeline";
import Enquiry from "./Enquiry";
export default function Home() {
  return (
    <div>
      <HeroSlider />
      <HeroCards />
      <CompanyOverview />
      <Infographics />
      <HighlightedProducts />
      < CompanyTimeline />
      <Enquiry />
    </div>
  );
}
