import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav
        dir="rtl"
        className="flex flex-row justify-between items-center mx-6"
      >
        {/* 
        <picture>
          <source
            srcSet="/images/oxinLogo180x127.png"
            media="(min-width: 800px)"
          />
          <img src="/images/oxinLogo128x90.png" alt="Oxin Game" />
        </picture> 
        */}

        <Image
          className="max-md:w-[128px] max-lg:w-[150px] max-xl:w-[168px]"
          src="/images/oxinLogo180x127.png"
          alt="Oxin Game"
          width={180}
          height={127}
        />

        <button className="btn ring-2 ring-primary-500 bg-transparent font-semibold text-lg">
          حساب کاربری
        </button>
      </nav>
    </div>
  );
}
