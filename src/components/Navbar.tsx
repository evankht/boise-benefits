import Link from "next/link";
import NavButton from "./NavButton";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0">
      <div className="mx-auto flex items-center justify-between bg-blue-950 p-3 shadow-lg">
        <Link href="/" className="flex items-center px-3">
          <Image
            src="/logo.png"
            width={32}
            height={32}
            className="mr-3 h-8"
            alt="Boise Benefits Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Boise Benefits
          </span>
        </Link>
        <div id="navbar-default">
          <ul className="flex space-x-3 font-medium">
            <NavButton text="Home" />
            <NavButton text="About" />
            <NavButton text="Contact" />
            <NavButton text="Login" />
          </ul>
        </div>
      </div>
    </header>
  );
}
