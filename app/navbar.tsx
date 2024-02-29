import createNodeSDK from "./utils/createNodeSDK";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

export default async function Navbar() {
  const cookieStore = cookies();
  const sdk = createNodeSDK();
  const session = cookieStore.get("cbo_short_session");
  let authenticated: boolean;
  try {
    const currentSessionUser = await sdk
      .sessions()
      .getCurrentUser(session?.value ?? "");
    authenticated =
      !!currentSessionUser && currentSessionUser.isAuthenticated();
  } catch {
    authenticated = false;
  }

  return (
    <nav className="fixed left-0 top-0 z-10 flex h-20 w-screen items-center px-5">
      <Link className="mr-auto text-3xl font-bold" href="/">
        <Image
          src="/Logo-Light.svg"
          alt="Corbado Logo"
          width={200}
          height={200}
        />
      </Link>
      <ul className="flex items-center gap-x-3">
        {authenticated && (
          <>
            <li>
              <Link
                href="/profile"
                className="buttons custom-font bg-blue-700 px-4 py-2 text-lg hover:bg-blue-500"
              >
                Profile
              </Link>
            </li>
          </>
        )}
        {!authenticated && (
          <>
            <li>
              <Link
                href="/login"
                className="buttons custom-font hover:text-white-500 border border-white text-lg hover:border-blue-500"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="buttons custom-font border border-blue-700 bg-blue-700 text-lg hover:border-blue-500 hover:bg-blue-500"
              >
                Sign up for free
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
