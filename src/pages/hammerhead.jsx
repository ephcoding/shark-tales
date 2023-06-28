import { PageLayout } from "@/components/PageLayout";

const HammerheadPage = () => {
  return (
    <PageLayout>
      <div
        className={`h-screen bg-cover bg-no-repeat bg-center bg-[url('/hammerhead.jpg')] opacity-30`}
      ></div>
    </PageLayout>
  );
};

export default HammerheadPage;
