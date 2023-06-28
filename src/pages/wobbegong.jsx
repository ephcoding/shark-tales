import { PageLayout } from "@/components/PageLayout";

const WobbegongPage = () => {
  return (
    <PageLayout>
      <div
        className={`h-screen bg-cover bg-no-repeat bg-center bg-[url('/wobbegong.jpg')] opacity-30`}
      ></div>
    </PageLayout>
  );
};

export default WobbegongPage;
