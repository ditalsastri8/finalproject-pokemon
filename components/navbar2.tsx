import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-red-400 text-primary-foreground ">
      <div className="container flex items-center justify-between py-3">
        <h1 className="text-3xl font-bold hover:cursor-pointer"> Detail Pokemon </h1>
        <nav>
          <ul className="flex gap-10">
            <li className="rounded-md px-10 py-3 hover:cursor-pointer hover:bg-red-400">
              
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;