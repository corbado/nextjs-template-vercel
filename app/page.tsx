import Image from "next/image";
import Link from "next/link";

export default function LangdingPage() {
  return (
    <div
      className="relative z-0 flex min-h-screen flex-col items-center justify-center gap-8 text-center"
      id="landingPageContainer"
    >
      <Image
        src="/fingerprint-icon.svg"
        className="absolute left-0 top-[15%] hidden md:block"
        alt="Fingerprint icon"
        width={200}
        height={200}
      />
      <div className="mt-auto">
        <Image
          src="/user-with-passkey.svg"
          alt="passkey icon"
          width={250}
          height={250}
        />
      </div>
      <div>
        <p className="text-lg text-white" id="sub-tagline">
          Let your users log in with Face ID, Touch ID or Windows Hello via
        </p>
        <br></br>
        <h2 className="mt-2 text-3xl font-bold text-white" id="tagline">
          Passkeys
        </h2>
      </div>
      <br></br>
      <Link
        href="https://github.com/corbado/next.js-template-vercel"
        className="buttons bg-blue-700 text-lg font-medium hover:bg-blue-700"
      >
        Check the code
      </Link>
      <div className="relative mt-auto w-full bg-gray-800 text-white">
        <Image
          src="/Logo-bottom.svg"
          alt="Corbado logo"
          width={150}
          height={150}
          className="absolute left-[5%] top-[-75px] hidden md:block"
        />
        <h2 className="custom-bottom">Explore more features</h2>
      </div>
    </div>
  );
}
