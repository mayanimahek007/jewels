import Image from "next/image";
import S2CategorySection from "./ui/s2-category";
import JewelryShowcase from "./ui/s3-bestSelling";
import DiamondSection from "./ui/s5-diamond";
import MustHaveCollection from "./ui/s6-mustHaveCollection";
import DiamondCut from "./ui/s8-diamondcut";
import GemsGlobalSet from "./ui/s9-gemsGlobalSet";
import GiftSection from "./ui/s10-gifting";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <S2CategorySection />

            <JewelryShowcase />
            {/* <GiftShowcase /> */}
            <DiamondSection />
            <MustHaveCollection />

            <DiamondCut />

            <GemsGlobalSet />
            <GiftSection />
    </div>
  );
}