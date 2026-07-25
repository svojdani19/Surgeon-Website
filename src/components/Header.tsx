import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { doctor } from "@/lib/site";

const navLinks = [
  { href: "/about", label: "About Dr. Vojdani" },
  { href: "/services", label: "Hip & Knee Care" },
  { href: "/education", label: "Education" },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/total-joint-logo.png"
            alt="Total Joint Specialists"
            width={1910}
            height={500}
            priority
            className="h-11 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-800 hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={doctor.schedulingPhoneHref}
          className="hidden shrink-0 rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 sm:inline-block"
        >
          Call {doctor.schedulingPhoneDisplay}
        </a>
      </Container>
      <nav className="flex items-center gap-4 overflow-x-auto border-t border-brand-50 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 text-sm font-medium text-brand-800"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
