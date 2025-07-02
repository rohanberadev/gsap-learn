import Image from "next/image";
import Link from "next/link";
import { navLinks } from "~/constants";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href="#hero" className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={25}
                        height={25}
                    />
                    <p>Velvet Pour</p>
                </Link>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link href={`#${link.id}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
