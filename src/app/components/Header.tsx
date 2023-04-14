import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center items-center bg-blue-800 text-white p-4 border-solid border-b-4">
      <div className="container">
        <div className="logo">
          <Link href="/">Next.js 13</Link>
        </div>
        <div className="links flex justify-center">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
