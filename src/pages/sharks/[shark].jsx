import { useRouter } from "next/router";
import { Progress } from "react-daisyui";

import { HomeLinkButton } from "@/components/HomeLinkButton";
import { PageWithBackgroundImage } from "@/components/PageWithBackgroundImage";
import { SHARK_INFO } from "@/constants";

const SharkPage = () => {
  const nextRouter = useRouter();
  let slug = nextRouter.query.shark;
  const sharkInfoProp = convertSlugToSharkInfoProp(slug);
  const shark = SHARK_INFO[sharkInfoProp];
  const { imageSrc, maxLength, maxWeight, swimSpeed, name } = shark;
  const stats = { maxLength, maxWeight, swimSpeed };

  return (
    <PageWithBackgroundImage bgImgUrl={imageSrc}>
      <SharkInfoPageHeader name={name} />
      <ProgressStats stats={stats} />
    </PageWithBackgroundImage>
  );
};

export default SharkPage;

const ProgressStats = ({ stats }) => {
  const {
    maxLength: { feet },
    maxWeight: { pounds },
    swimSpeed: { mph },
  } = stats;

  return (
    <div className="flex flex-col gap-y-2 w-1/2 mx-auto bg-blue-800/50 rounded-md p-10">
      <ProgressStat title="Max Length:" value={feet ?? "NA"} />
      <ProgressStat title="Max Weight:" value={pounds ?? "NA"} />
      <ProgressStat title="Swim Speed:" value={mph ?? "NA"} />
    </div>
  );
};

const SharkInfoPageHeader = ({ name }) => {
  return (
    <div className="flex justify-between">
      <HomeLinkButton />
      <h1 className="text-6xl font-bold uppercase text-white">{name}</h1>
    </div>
  );
};

const ProgressStat = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="flex-1">{title}</span>
      <Progress className="flex-3 w-56" max={100} color="info" value={value} />
      <span className="flex-1 pl-5">{value}</span>
    </div>
  );
};

const convertSlugToSharkInfoProp = (slug) => {
  const splitName = slug.split("-");
  const endIndex = splitName.length - 1;
  const sharkType = splitName.slice(0, endIndex).join("");

  return sharkType;
};
