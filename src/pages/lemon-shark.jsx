import { HomeLinkButton } from "@/components/HomeLinkButton";
import { PageWithBackgroundImage } from "@/components/PageWithBackgroundImage";

const LemonSharkPage = () => {
  return (
    <PageWithBackgroundImage bgImgUrl="/lemon-shark.jpg">
      <HomeLinkButton />
    </PageWithBackgroundImage>
  );
};

export default LemonSharkPage;
