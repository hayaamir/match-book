"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const menuItems = [
  { name: "המחברת", href: "candidates" },
  { name: "פרופיל", href: "#" },
  { name: "שאלון", href: "questionnaire" },
];

export const Header = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" aria-label="home" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </Link>

        <nav aria-label="primary">
          <ul className="hidden gap-6 text-sm font-medium text-foreground md:flex">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Unauthenticated>
            <SignInButton mode="modal">
              <Button asChild variant="outline" size="sm">
                <Link href="#">כניסה</Link>
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button asChild size="sm">
                <Link href="#">הרשמה</Link>
              </Button>
            </SignUpButton>
          </Unauthenticated>
          <Authenticated>
            <UserButton />
          </Authenticated>
        </div>
      </div>
    </header>
  );
};
