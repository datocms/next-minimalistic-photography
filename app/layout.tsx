import './globals.css';
import { Playfair_Display, Poppins } from 'next/font/google';
import { ActiveLink } from '@/components/ActiveLink';
import { WhatsappIcon } from '@/components/WhatsappIcon';
import { NavigationMenu } from '@/components/NavigationMenu';
import { request } from '@/lib/dato';
import { LayoutDocument, LayoutQuery } from '@/graphql/generated';
import { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { renderMetaTags } from 'react-datocms/seo';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
});

function colorToRule(color: { red: number; green: number; blue: number }) {
  return `${color.red} ${color.green} ${color.blue}`;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { homepage, site } = await request(LayoutDocument);

  return (
    <html lang="en">
      {renderMetaTags(site.faviconMetaTags)}
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} font-sans overflow-x-hidden text-gray`}
        style={
          homepage
            ? ({
                '--color-accent': colorToRule(homepage.accentColor),
                '--color-highlight': colorToRule(homepage.highlightColor),
              } as CSSProperties)
            : undefined
        }
      >
        <NavigationMenu />
        {children}
      </body>
    </html>
  );
}
