import CaseStudyCard from "../components/CaseStudyCard";

export default function CaseStudies() {
  return (
    <div className="p-12">
      
      <h1 className="text-3xl font-bold mb-8">
        Case Studies
      </h1>

      <div className="grid grid-cols-3 gap-8">
      <CaseStudyCard id="1" title="UHMWPE Liners Improve Feeder Flow" />
<CaseStudyCard id="2" title="Iron Ore Feeder Upgraded with Ceramic Liners" />
<CaseStudyCard id="3" title="Durable Rubber Load Mats Improve Transport Safety" />
<CaseStudyCard id="4" title="Load-Bearing Rubber Strips Support Battery Storage" />
<CaseStudyCard id="5" title="Custom Rubber Lining Extends Drum Life" />
<CaseStudyCard id="6" title="Bonded Rubber Load Mat Improves Safety" />

      </div>

    </div>
  );
}
