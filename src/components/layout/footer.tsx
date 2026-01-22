import Link from 'next/link';
import { socialLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border/30 mt-16 md:mt-24">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nishtha Banerjee. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${link.name} profile`}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
