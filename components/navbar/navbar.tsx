import Link from "next/link"

export default function Navbar({ links,className }: { links: Array<Links>,className?:string }) {
  return (
    <div className={`px-3 ${className}`}>
      <ul className="flex justify-evenly flex-col lg:flex-row h-full items-center gap-3">
        {links.map((link) => (
          <li key={link.title}>
            <Link href={link.src}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Links {
  title: string;
  src: string;
}
