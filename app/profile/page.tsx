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
      <h1 className="text-2xl font-bold">Hi {user.fullName},</h1>
      <div className="mb-3 mt-3">
        <p>These are your user details:</p>
        <ul className="m-3 flex flex-col gap-3">
          <li className="flex">
            <EnvelopeIcon className="mr-2 w-6" /> Email:{" "}
            {activeEmail
              ? `${activeEmail?.email} created at ${activeEmail?.created}`
              : "No active email"}
          </li>
          <li className="flex">
            <UserCircleIcon className="mr-2 w-6" /> Name: {user.fullName}
          </li>
          <li className="flex">
            <PhoneIcon className="mr-2 w-6" /> Phone Number:{" "}
            {activePhone?.phoneNumber
              ? `${activePhone?.phoneNumber} created at ${activePhone?.created}`
              : "No active phone number"}
            {activePhone?.created}
          </li>
          <li className="flex gap-2">
            Is Authenticated:{" "}
            {currentSessionUser.isAuthenticated() ? (
              <CheckCircleIcon className="w-6" />
            ) : (
              <XCircleIcon className="w-6" />
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
