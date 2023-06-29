import { Navbar } from "react-daisyui";
import Link from "next/link";

export const PageLayout = ({ children }) => {
  return (
    <main className={`min-h-screen bg-black bg-opacity-50`}>{children}</main>
  );
};
