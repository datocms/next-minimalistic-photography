import Link from 'next/link';
import { ActiveLink } from './ActiveLink';
import { WhatsappIcon } from './WhatsappIcon';

function MenuItem({
  href,
  segment,
  children,
}: {
  href: string;
  segment: string | null;
  children: React.ReactNode;
}) {
  return (
    <ActiveLink
      segment={segment}
      className="p-4 decoration-[#f4cf58] decoration-4 underline-offset-4 hover:underline"
      activeClassName="underline"
      href={href}
    >
      {children}
    </ActiveLink>
  );
}

export function NavigationMenu() {
  return (
    <>
      <div className="h-32 lg:hidden" />
      <div className="fixed flex z-10 items-center left-0 px-2 lg:px-8 top-10 uppercase font-bold backdrop-brightness-150 bg-white/50">
        <MenuItem segment={null} href="/">
          Home
        </MenuItem>
        <MenuItem href="/about" segment="about">
          About
        </MenuItem>
        <MenuItem href="/contact" segment="contact">
          Contact
        </MenuItem>
        <Link href="https://wa.me/393491769335" className="p-4">
          <WhatsappIcon />
        </Link>
      </div>
    </>
  );
}
