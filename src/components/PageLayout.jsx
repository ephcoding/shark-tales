import { Navbar } from "react-daisyui";
import Link from "next/link";

export const PageLayout = ({ children }) => {
  return (
    <main className={`min-h-screen bg-black`}>
      <Navbar className="text-white">
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/whale-shark" className="mr-4">
          Whale Shark
        </Link>
        <Link href="/great-white" className="mr-4">
          Great White
        </Link>
        <Link href="/hammerhead" className="mr-4">
          Hammerhead
        </Link>
        <Link href="/wobbegong" className="mr-4">
          Wobbegong
        </Link>
      </Navbar>
      {children}
    </main>
  );
};
