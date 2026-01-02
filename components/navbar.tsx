"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavbarProps {
  onOpenForm?: () => void;
}

export function Navbar({ onOpenForm }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 64; // 64px for navbar height
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Logo */}
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/favicon/android-chrome-192x192.png"
              alt="Papi Map Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-slate-900" style={{ fontFamily: "var(--font-nunito)" }}>
              Papimap
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "#how-it-works")}
              className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors"
            >
              How it Works
            </a>
            <a
              href="#map-demos"
              onClick={(e) => handleNavClick(e, "#map-demos")}
              className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors"
            >
              Map Demos
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* Right: CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <Button
              onClick={() => {
                if (onOpenForm) {
                  onOpenForm();
                } else {
                  scrollToTop();
                }
              }}
              className="hidden sm:flex rounded-full font-semibold text-slate-900 transition-colors"
              style={{ 
                backgroundColor: "var(--primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)";
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)";
                e.currentTarget.style.opacity = "1";
              }}
            >
              Get Early Access
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-[#8DC4DA] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              <a
                href="#how-it-works"
                onClick={(e) => handleNavClick(e, "#how-it-works")}
                className="text-sm font-medium text-slate-600 hover:text-[#8DC4DA] transition-colors py-2"
              >
                How it Works
              </a>
              <a
                href="#map-demos"
                onClick={(e) => handleNavClick(e, "#map-demos")}
                className="text-sm font-medium text-slate-600 hover:text-[#8DC4DA] transition-colors py-2"
              >
                Map Demos
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "#pricing")}
                className="text-sm font-medium text-slate-600 hover:text-[#8DC4DA] transition-colors py-2"
              >
                Pricing
              </a>
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenForm) {
                    onOpenForm();
                  } else {
                    scrollToTop();
                  }
                }}
                className="w-full rounded-full font-semibold text-slate-900 mt-2 transition-colors"
                style={{ 
                  backgroundColor: "#F2BD50",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e0ac40";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#F2BD50";
                }}
              >
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

