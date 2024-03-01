import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default function SessionDetails() {
  const cookieStore = cookies();
  const session = cookieStore.get("cbo_short_session");

  const decodedShortSession = jwtDecode(session?.value ?? "");
  const serializedDecodedShortSession = JSON.stringify(
    decodedShortSession,
    null,
    2,
  );

  return (
    <>
      <p className="text-center" style={{ color: "#6EA9F8" }}>
        This is your shortSession:
      </p>
      <div
        className="mt-8 rounded-md bg-blue-500 p-6"
        style={{ backgroundColor: "#0C1A48" }}
      >
        <div className="mb-3 mt-3 text-white">
          <pre>{serializedDecodedShortSession}</pre>
        </div>
      </div>
    </>
  );
}
