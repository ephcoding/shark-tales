import { HomeLinkButton } from "@/components/HomeLinkButton";
import { PageWithBackgroundImage } from "@/components/PageWithBackgroundImage";

const GreateWhitePage = () => {
  return (
    <PageWithBackgroundImage bgImgUrl="/great-white-shark.jpg">
      <HomeLinkButton />
    </PageWithBackgroundImage>
  );
};

export default GreateWhitePage;
