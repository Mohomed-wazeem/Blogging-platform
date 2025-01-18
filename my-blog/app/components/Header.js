'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Replace with actual authentication state

  return (
    <header className="bg-white shadow-lg">
      <nav aria-label="Global" className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-5 p-1.5">
            <span className="sr-only">Blog</span>
            <img
              alt="Blog Logo"
              src="/images/blogLogo.png"
              className="h-20 w-auto" // Adjusted size
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold text-gray-900">Home</Link>
          <Link href="/about" className="text-sm font-semibold text-gray-900">About</Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-900">Contact Us</Link>
            <Link href="/write" className="text-sm font-semibold text-gray-900">Write</Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Sign In/Sign Up Links */}
          {!isUserLoggedIn ? (
            <>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
             <a href="/signin" className="text-sm font-semibold text-gray-900">
             Sign in <span aria-hidden="true">&rarr;</span>
             </a>
            </div>
            </>
          ) : (
            <a href="#" className="text-sm font-semibold text-gray-900">Log Out</a>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Blog</span>
              <img
                alt="Blog Logo"
                src="/images/blogLogo.png"
                className="h-20 w-auto" // Adjusted size
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Home</Link>
                <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">About</Link>
                <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Contact Us</Link>
                <Link href="/write" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Write</Link>
  
              </div>
              <div className="py-6">
                {!isUserLoggedIn ? (
               <>
              <Link href="/signin" className="text-sm font-semibold text-gray-900">Sign In</Link>
              </>
              ) : (
              <a href="#" className="text-sm font-semibold text-gray-900">Log Out</a>
               )}

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
