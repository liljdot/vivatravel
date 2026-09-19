import HeadingSection from "./HeadingSection";
import MapSection from "./MapSection";
import MoreThanSection from "./MoreThanSection";
import PillarsSection from "./PillarsSection";
import WhyChooseSection from "./WhyCooseSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-neutral">
      <HeadingSection />
      <MapSection />
      <MoreThanSection />
      <PillarsSection />
      <WhyChooseSection />
    </main>
  );
}
