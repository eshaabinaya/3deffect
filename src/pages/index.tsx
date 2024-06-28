import Image from "next/image";
import { Inter } from "next/font/google";
import { SignupFormDemo } from "../components/ui/signupformdemo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <SignupFormDemo/>
  </>
  );
}
