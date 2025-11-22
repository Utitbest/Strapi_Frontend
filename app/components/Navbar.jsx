"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full onlyview relative">
      <div className="bg-[#171717] max-w-6xl mx-auto px-3 flex items-center py-[2em] relative border-b-2 border-gray-700">
        <Link href="/" className="items-center">
          <span className="text-xl font-serif font-bold tracking-tight">UTITBEST</span>
        </Link>
        <nav className="hidden custom:flex pl-[4em] items-center justify-between flex-1">
          
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          <ul className="flex items-center gap-3.5">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/authors">Authors</NavLink>
            <NavLink href="/membership">Membership</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </ul>
        </nav>

        <div className="custom:hidden ml-auto">
          <MobileMenu open={open} setOpen={setOpen} />
        </div>
      </div>

      {open && (
        <div className="custom:hidden bg-[#171717] border-b border-gray-700 px-4 py-4 animate-slideDown">
          <ul className="flex flex-col gap-4">
            <NavLink href="/" mobile>Home</NavLink>
            <NavLink href="/categories" mobile>Categories</NavLink>
            <NavLink href="/authors" mobile>Authors</NavLink>
            <NavLink href="/membership" mobile>Membership</NavLink>
            <NavLink href="/blog" mobile>Blog</NavLink>
            <NavLink href="/about" mobile>About</NavLink>
            <NavLink href="/contact" mobile>Contact</NavLink>

            <div className="pt-2">
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, mobile }) {
  return (
    <Link
      href={href}
      className={`text-[18px] text-[#ededed] hover:text-gray-400 ${mobile ? "block" : ""}`}
    >
      {children}
    </Link>
  );
}

function MobileMenu({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen((open) => !open)}
      className="p-2 rounded-md hover:bg-gray-800"
    >
      {open ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
