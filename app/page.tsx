import CloserLookSection from "./CloserLookSection";
import HeadingSection from "./HeadingSection";
import JourneysSection from "./JourneysSection";
import LetsTalkSection from "./LetsTalkSection";
import MapSection from "./MapSection";
import MoreThanSection from "./MoreThanSection";
import PillarsSection from "./PillarsSection";
import WhyChooseSection from "./WhyCooseSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-neutral overflow-clip">
      <HeadingSection />
      <MapSection />
      <MoreThanSection />
      <PillarsSection />
      <WhyChooseSection />
      <CloserLookSection />
      {/* <LetsTalkSection />
      <JourneysSection /> */}
    </main>
  );
}
