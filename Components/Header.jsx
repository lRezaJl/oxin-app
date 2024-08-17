import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/account");
  };

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

        <button
          onClick={handleButtonClick}
          className="btn ring-2 ring-primary-500 bg-transparent font-semibold text-lg"
        >
          حساب کاربری
        </button>
      </nav>
    </div>
  );
}
