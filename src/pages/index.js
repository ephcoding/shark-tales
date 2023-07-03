import { SHARK_INFO } from "@/constants";
import { PageWithBackgroundImage, SharkCard } from "@/components";
import { sortObjArrByStrProp } from "@/utils";

export default function Home() {
  const sortedSharks = Object.values(SHARK_INFO).sort((a, b) =>
    sortObjArrByStrProp(a, b, "name")
  );

  return (
    <PageWithBackgroundImage bgImgUrl="/sharks-from-top.jpg">
      <GridLayout>
        {sortedSharks.map(({ imageSrc, name, url }) => {
          return (
            <SharkCard key={name} imageSrc={imageSrc} name={name} url={url} />
          );
        })}
      </GridLayout>
    </PageWithBackgroundImage>
  );
}

const GridLayout = ({ children }) => {
  return (
    <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 overflow-auto">
      {children}
    </div>
  );
};
