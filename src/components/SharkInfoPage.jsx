import { Navbar, Progress } from "react-daisyui";

import { HomeLinkButton } from "@/components/HomeLinkButton";
import { PageWithBackgroundImage } from "@/components/PageWithBackgroundImage";

export const SharkInfoPage = ({ shark }) => {
  const { imageSrc, maxLength, maxWeight, swimSpeed, name } = shark;
  const stats = { maxLength, maxWeight, swimSpeed };

  return (
    <PageWithBackgroundImage bgImgUrl={imageSrc}>
      <SharkInfoPageHeader name={name} />
      <ProgressStats stats={stats} />
    </PageWithBackgroundImage>
  );
};

const SharkInfoPageHeader = ({ name }) => {
  return (
    <Navbar>
      <Navbar.Start>
        <HomeLinkButton />
      </Navbar.Start>
      <Navbar.End>
        <h1 className="text-6xl font-bold uppercase text-white">{name}</h1>
      </Navbar.End>
    </Navbar>
  );
};

const ProgressStats = ({ stats }) => {
  const {
    maxLength: { feet },
    maxWeight: { pounds },
    swimSpeed: { mph },
  } = stats;

  return (
    <div className="flex flex-col gap-y-2 w-1/2 mx-auto bg-black rounded-md p-10">
      <ProgressStat title="Max Length:" value={feet ?? "NA"} />
      <ProgressStat title="Max Weight:" value={pounds ?? "NA"} />
      <ProgressStat title="Swim Speed:" value={mph ?? "NA"} />
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
