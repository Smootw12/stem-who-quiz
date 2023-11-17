import { Github, Menu, Undo2 } from "lucide-react";
import Link from "next/link";
import ThemeChanger from "@/components/ThemeChanger/ThemeChanger";

function Navbar() {
  return (
    <>
      <div className="navbar fixed left-0 top-0 z-[21] bg-opacity-[0.95] bg-base-100 backdrop-blur transition-all duration-100 [transform:translate3d(0,0,0)] shadow-sm">
        <div className="navbar-start">
          <Link
            href="https://github.com/Smootw12"
            className="btn btn-ghost normal-case text-xl repeat-animation"
          >
            <Github />
          </Link>
        </div>
        <div className="navbar-end space-x-4">
          <ThemeChanger />

          <Link href="/" className="btn btn-primary hidden xl:inline-flex">
            TORNA ALLA HOME!
          </Link>
          <Link
            href="/"
            className="btn btn-ghost normal-case inline-flex xl:hidden"
          >
            <Undo2 />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
