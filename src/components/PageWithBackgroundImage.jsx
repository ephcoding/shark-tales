import { PageLayout } from "@/components/PageLayout";

export const PageWithBackgroundImage = ({ bgImgUrl, children }) => {
  return (
    <PageLayout>
      <div
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url(${bgImgUrl})`,
        }}
        className={`min-h-screen bg-cover bg-no-repeat bg-center p-6`}
      >
        {children}
      </div>
    </PageLayout>
  );
};
