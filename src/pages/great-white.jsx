import { PageLayout } from "@/components/PageLayout";

const GreateWhitePage = () => {
  return (
    <PageLayout>
      <div
        className={`h-screen bg-cover bg-no-repeat bg-center bg-[url('/great-white.jpg')] opacity-30`}
      ></div>
    </PageLayout>
  );
};

export default GreateWhitePage;
