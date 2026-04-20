
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 text-sm text-gray-300">
      <Link href="/" className="font-bold text-white">
        KIM DASOM
      </Link>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
