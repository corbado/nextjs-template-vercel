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
          src="/passkey-icon.svg"
          alt="passkey icon"
          width={100}
          height={100}
        />
      </div>
      <div>
        <p className="text-lg">
          This is a sample application that demonstrates
          <br />
          the authentication flow using
        </p>
        <h2 className="mt-2 text-3xl font-bold">
          Passkey integration by Corbado
        </h2>
      </div>
      <Link
        href=""
        className="rounded-full bg-blue-500 px-5 py-3 text-lg font-bold text-white hover:bg-blue-700"
      >
        Check out the code sample
      </Link>
      <div className="relative mt-auto w-full bg-gray-800 text-white">
        <Image
          src="/corbado-logo.svg"
          alt="Corbado logo"
          width={150}
          height={150}
          className="absolute right-[10%] top-[-75px] hidden md:block"
        />
        <h2 className="p-12 text-2xl font-bold">Explore more features</h2>
      </div>
    </div>
  );
}
