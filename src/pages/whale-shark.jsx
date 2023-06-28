import { PageLayout } from "@/components/PageLayout";

const WhaleSharkPage = () => {
  return (
    <PageLayout>
      <div
        className={`h-screen bg-cover bg-no-repeat bg-center bg-[url('/whale-shark.jpg')] opacity-30`}
      ></div>
    </PageLayout>
  );
};

export default WhaleSharkPage;
