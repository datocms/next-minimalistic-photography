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
      className="decoration-[#f4cf58] decoration-4 underline-offset-4 hover:underline"
      activeClassName="underline"
      href={href}
    >
      {children}
    </ActiveLink>
  );
}

export function NavigationMenu() {
  return (
    <div className="fixed flex z-10 items-center left-0 px-10 py-4 top-10 uppercase font-bold space-x-4 backdrop-brightness-150 bg-white/40">
      <MenuItem segment={null} href="/">
        Home
      </MenuItem>
      <MenuItem href="/about" segment="about">
        About
      </MenuItem>
      <MenuItem href="/contact" segment="contact">
        Contact
      </MenuItem>
      <div>
        <WhatsappIcon />
      </div>
    </div>
  );
}
