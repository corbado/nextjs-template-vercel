import { Suspense } from "react";
import Loading from "../ui/loading";
import { cookies } from "next/headers";
import {
  CheckCircleIcon,
  XCircleIcon,
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  PencilIcon,
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
      <h1 className="text-2xl font-bold text-white">Hi {user.fullName},</h1>
      <br></br>
      <br></br>
      <p className="text-white" style={{ fontSize: "16px" }}>
        User details:
      </p>
      <hr className="mt-2" style={{ opacity: "20%" }}></hr>
      <div className="rounded-md" style={{ backgroundColor: "transparent" }}>
        <div>
          <ul className="mt-2 space-y-4">
            <li className="flex items-center text-white">
              <UserCircleIcon className="mr-2 w-6" />
              <span className="font-semibold">Name:</span>{" "}
              <span className="custom-bg">{user.fullName}</span>
            </li>

            <li className="flex items-center text-white">
              <EnvelopeIcon className="mr-2 w-6" />
              <span className="font-semibold"> Email:</span>
              <span className="custom-bg ">
                {" "}
                {activeEmail ? activeEmail?.email : "No active email"}
              </span>
            </li>
            <li className="flex items-center text-white">
              <PhoneIcon className="mr-2 w-6" />{" "}
              <span className="font-semibold">Phone Number:</span>
              <span className="custom-bg">
                {" "}
                {activePhone
                  ? activePhone?.phoneNumber
                  : "No active phone number"}
              </span>
            </li>
            <li className="flex items-center text-white">
              <PencilIcon className="mr-2 w-6" />{" "}
              <span className="font-semibold">Created: </span>
              <span className="custom-bg">
                {" "}
                {activeEmail ? `${activeEmail?.created}` : "-"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
