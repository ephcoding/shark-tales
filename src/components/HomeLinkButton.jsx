import Link from "next/link";
import { GiSharkFin } from "react-icons/gi";

export const HomeLinkButton = () => {
  return (
    <Link href="/">
      <GiSharkFin
        size={50}
        color="white"
        className="border-white border-2 p-2 rounded-3xl bg-blue-500"
      />
    </Link>
  );
};
