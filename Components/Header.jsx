"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav
        dir="rtl"
        className="flex flex-row justify-between items-center mx-6"
      >
        <Image
          className="max-md:w-[128px] max-lg:w-[150px] max-xl:w-[168px]"
          src="/images/oxinLogo180x127.png"
          alt="Oxin Game"
          width={180}
          height={127}
        />

        <Link
          href="/account"
          className="btn ring-2 ring-primary-500 bg-transparent font-semibold text-lg"
        >
          حساب کاربری
        </Link>
      </nav>
    </div>
  );
}
