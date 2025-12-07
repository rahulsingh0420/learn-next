import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/image/logo.webp";

export default function Navabar() {
    return (
      <nav className="grid grid-cols-2 font-roboto bg-slate-800 text-white p-3 shadow-2xl">
        <div className="ms-4">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="Logo"
            className="rounded-full"
            quality={60}
            placeholder="blur"
          />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/servercomp"}>Server Comp</Link>
          <Link href={"/clientcomp"}>Client Comp</Link>
        </div>
      </nav>
    );
}