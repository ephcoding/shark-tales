import { useRouter } from "next/router";

import { SharkInfoPage } from "@/components";
import { SHARK_INFO } from "@/constants";

const SharkPage = () => {
  const nextRouter = useRouter();
  let slug = nextRouter.query.shark;
  const sharkType = getSharkPropNameFromSlug(slug);

  return <SharkInfoPage shark={SHARK_INFO[`${sharkType}`]} />;
};

export default SharkPage;

const getSharkPropNameFromSlug = (slug) => {
  const splitName = slug.split("-");
  const endIndex = splitName.length - 1;
  const sharkType = splitName.slice(0, endIndex).join("");

  return sharkType;
};
