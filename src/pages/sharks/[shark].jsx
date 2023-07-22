import { useRouter } from "next/router";
import { Progress, Stats } from "react-daisyui";

import { HomeLinkButton } from "@/components/HomeLinkButton";
import { PageWithBackgroundImage } from "@/components/PageWithBackgroundImage";
import { SHARK_INFO } from "@/constants";

const { Stat } = Stats;

const SharkPage = () => {
  const nextRouter = useRouter();
  console.clear();
  console.log("NEXT ROUTER:\n", nextRouter);
  let slug = nextRouter.query.shark;
  const sharkInfoProp = convertSlugToSharkInfoProp(slug);
  const shark = SHARK_INFO[sharkInfoProp];
  const { imageSrc, maxLength, maxWeight, swimSpeed, name } = shark;
  const stats = { maxLength, maxWeight, swimSpeed };

  return (
    <PageWithBackgroundImage bgImgUrl={imageSrc}>
      <div className="flex flex-col h-screen">
        <SharkInfoPageHeader name={name} />
        <div className="flex flex-1 justify-center items-center">
          <SharkStats stats={stats} />
        </div>
      </div>
    </PageWithBackgroundImage>
  );
};

export default SharkPage;

const SharkInfoPageHeader = ({ name }) => {
  return (
    <div className="flex justify-between">
      <HomeLinkButton />
      <h1 className="text-6xl font-bold uppercase text-white">{name}</h1>
    </div>
  );
};

const SharkStats = ({ stats }) => {
  const {
    maxLength: { feet },
    maxWeight: { pounds },
    swimSpeed: { mph },
  } = stats;

  return (
    <Stats horizontal className="bg-transparent">
      <Stats.Stat className="bg-blue-700/30">
        <Stat.Item variant="title">MAX LENGTH</Stat.Item>
        <Stat.Item variant="value">{feet} ft.</Stat.Item>
      </Stats.Stat>

      <Stats.Stat className="bg-blue-700/30">
        <Stat.Item variant="title">MAX WEIGHT</Stat.Item>
        <Stat.Item variant="value">{pounds} lb.</Stat.Item>
      </Stats.Stat>

      <Stats.Stat className="bg-blue-700/30">
        <Stat.Item variant="title">SWIM SPEED</Stat.Item>
        <Stat.Item variant="value">{mph} mph</Stat.Item>
      </Stats.Stat>
    </Stats>
  );
};

const convertSlugToSharkInfoProp = (slug) => {
  const splitName = slug.split("-");
  const endIndex = splitName.length - 1;
  const sharkType = splitName.slice(0, endIndex).join("");

  return sharkType;
};
