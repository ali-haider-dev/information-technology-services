"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react" // for hamburger icons
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header className="fixed top-0  md:mx-16 z-50 mt-10 bg-white   w-[90vw] rounded-2xl shadow-xl py-2">
      <div className={`mx-auto h-16 flex max-w-7xl items-center justify-between px-6 py-4 ${isOpen ? "hidden" : ""}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 bg-[#1c398e] rounded-2xl">
          <div className=" flex items-center justify-center p-4">
            <Image src={"/its-logo.png"} width={100} height={80} alt="ITS Logo" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[#1c398e] font-medium" role="navigation">
          {["Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group transition duration-300 font-bold"
            >
              <span className="text- font-sans ">{item}</span>
              <span className="absolute left-0 bottom-[-6px] h-[1px] w-0 bg-[#1c398e] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <div className="hidden md:block">
            <Link
              href="/client-portal"
              className="rounded-full bg-[#1c398e] text-sm px-4 py-2 text-white font-bold shadow-lg transition  hover:shadow-lg"
            >
              Client Portal
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#1c398e]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slide-in) */}
      <div
        className={`fixed top-0 right-0  h-full w-screen bg-white transform transition-transform duration-300 ease-in-out z-40 sm:w-64 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Mobile menu"
      >
        {/* Top bar with logo + close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-lg flex items-center justify-center p-4 bg-[#1c398e] border border-white">
              <Image src={"/its-logo.png"} width={100} height={80} alt="ITS Logo" />
            </div>
          </Link>
          <button className="text-[#1c398e]  transition" onClick={() => setIsOpen(false)}>
            <X size={30} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col pl-4 mt-10 gap-10 text-base font-medium text-gray-700  h-[80%]">
          {["Services", "About", "Contact"].map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="relative group transition duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className=" text-[#1c398e] transition ">{item}</span>
              <span className="absolute left-0 bottom-[-16px] h-[2px] w-0 bg-gray-200 group-hover:bg-[#1c398e] transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA button */}
          <Link
            href="/client-portal"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-[#1c398e] text-center w-44 pl-2 py-3 text-white font-semibold shadow-md transition hover:border-white hover:border "
          >
            Client Portal
          </Link>
        </nav>
      </div>

      {/* Overlay (click to close) */}
      {isOpen && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" onClick={() => setIsOpen(false)} />}
    </header>
  )
}
