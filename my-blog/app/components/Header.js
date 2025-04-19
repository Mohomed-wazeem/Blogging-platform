"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogPanel
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { SignOutButton } from "./SignOutButton";

export default function Header({ user, signInUrl }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isUserLoggedIn = !!user;

  const handleSignOut = async () => {
    await SignOutButton();
    window.location.reload();
  };

  const getUserInitial = () => {
    if (!user) return "";
    return (user.firstName || user.email || "")[0]?.toUpperCase();
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img
              alt="Blog Logo"
              src="/images/blogLogo.png"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-10 lg:justify-center flex-1 text-center">
          <Link href="/" className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-indigo-600">
            <HomeIcon className="h-5 w-5" /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-indigo-600">
            <InformationCircleIcon className="h-5 w-5" /> About
          </Link>
          <Link href="/contact" className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-indigo-600">
            <EnvelopeIcon className="h-5 w-5" /> Contact Us
          </Link>
          <Link href="/write" className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-indigo-600">
            <PencilSquareIcon className="h-5 w-5" /> Write
          </Link>
        </div>

        {/* Right Side Auth */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          {!isUserLoggedIn ? (
            <a href={signInUrl} className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-indigo-600">
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              Sign In
            </a>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold">
                  {getUserInitial()}
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {user.firstName || user.email}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-red-600 ml-4"
              >
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                Log Out
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden z-50">
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <img
                alt="Blog Logo"
                src="/images/blogLogo.png"
                className="h-16 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* Nav Items */}
              <div className="space-y-2 py-6">
                <Link href="/" className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">
                  <HomeIcon className="h-5 w-5" /> Home
                </Link>
                <Link href="/about" className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">
                  <InformationCircleIcon className="h-5 w-5" /> About
                </Link>
                <Link href="/contact" className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">
                  <EnvelopeIcon className="h-5 w-5" /> Contact Us
                </Link>
                <Link href="/write" className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-100 rounded-lg">
                  <PencilSquareIcon className="h-5 w-5" /> Write
                </Link>
              </div>

              {/* Auth Section */}
              <div className="py-6">
                {!isUserLoggedIn ? (
                  <a href={signInUrl} className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-indigo-600">
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    Sign In
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold">
                      {getUserInitial()}
                    </div>
                    <span className="text-sm text-gray-800">{user.firstName || user.email}</span>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-red-600"
                    >
                      <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
