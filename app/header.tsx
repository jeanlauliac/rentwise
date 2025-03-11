import Link from "next/link";
import Image from "next/image";
import Logo from "./favicon.png";
import { ReactNode } from "react";

export default function Header(props: { children?: ReactNode }) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-12 bg-slate-50 border-b border-b-slate-100 px-4 py-2 z-10 shadow-xs flex items-center">
      <Link href="/" className="font-bold text-lg flex items-center gap-3">
        <Image src={Logo} alt="RentWise logo" className="w-5 h-5" />
        RentWise
      </Link>
      {props.children}
    </header>
  );
}
