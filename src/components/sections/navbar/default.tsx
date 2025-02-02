"use client";
// import Navigation from "../../ui/navigation";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
// import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import {  MessageCircle } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <MessageCircle />
              FydBox
            </Link>
            {/* <Navigation /> */}
          </NavbarLeft>
          <NavbarRight>
            {/* <a href="/sign-in" className="hidden text-sm md:block">
              Sign in
            </a> */}
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {pathname === "/" && (
              <SignedIn>
                <Button variant="default" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </SignedIn>
            )}

            <SignedOut>
              <Button variant="default" asChild>
                <Link href="/sign-in">Get Started</Link>
              </Button>
            </SignedOut>

            {/* <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>FydBox</span>
                  </Link>
                  <Link
                    href="/sign-in"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Getting Started
                  </Link>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </nav>
              </SheetContent>
            </Sheet> */}
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
