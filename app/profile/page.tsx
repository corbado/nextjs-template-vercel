import { Suspense } from "react";
import Loading from "../ui/loading";
import { cookies } from "next/headers";
import {
  CheckCircleIcon,
  XCircleIcon,
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import createNodeSDK from "@/app/utils/createNodeSDK";

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <CurrentUser />
    </Suspense>
  );
}

async function CurrentUser() {
  const cookieStore = cookies();
  const session = cookieStore.get("cbo_short_session");
  const sdk = createNodeSDK();
  const currentSessionUser = await sdk
    .sessions()
    .getCurrentUser(session?.value ?? "");
  const userResp = await sdk.users().get(currentSessionUser?.getID() ?? "");
  const user = userResp.data;
  const activeEmail = user.emails.find((email) => email.status === "active");
  const activePhone = user.phoneNumbers.find(
    (phone) => phone.status === "active",
  );

  return (
    <>
      <h1
        className="text-center text-2xl font-bold"
        style={{ color: "#6EA9F8" }}
      >
        Hi {user.fullName},
      </h1>
      <br></br>
      <p className="text-center" style={{ color: "#6EA9F8" }}>
        These are your user details:
      </p>
      <div
        className="mt-8 rounded-md bg-blue-500 p-6"
        style={{ backgroundColor: "#0C1A48" }}
      >
        <div className="mt-3">
          <ul className="mt-3 space-y-2">
            <li className="flex items-center text-white">
              <EnvelopeIcon className="mr-2 w-6" /> Email:{" "}
              {activeEmail
                ? `${activeEmail?.email} created at ${activeEmail?.created}`
                : "No active email"}
            </li>
            <li className="flex items-center text-white">
              <UserCircleIcon className="mr-2 w-6" /> Name: {user.fullName}
            </li>
            <li className="flex items-center text-white">
              <PhoneIcon className="mr-2 w-6" /> Phone Number:{" "}
              {activePhone?.phoneNumber
                ? `${activePhone?.phoneNumber} created at ${activePhone?.created}`
                : "No active phone number"}
              {activePhone?.created}
            </li>
            <br></br>
            <li className="flex items-center text-white">
              Is Authenticated:{" "}
              {currentSessionUser.isAuthenticated() ? (
                <CheckCircleIcon className="w-8 pl-2 text-green-500" />
              ) : (
                <XCircleIcon className="w-8 pl-2 text-red-500" />
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
