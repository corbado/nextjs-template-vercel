import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FaCopy } from "react-icons/fa";

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
      <h1 className="custom-headline text-2xl font-bold text-white">
        The following data is available in your short-term session (represented
        as JWT):
      </h1>

      <div
        className="mt-8 rounded-md bg-blue-500 p-4"
        style={{ backgroundColor: "#0C1A48" }}
      >
        <div className="relative mb-3 mt-3">
          <FaCopy
            className="absolute right-2 top-2"
            style={{ color: "white" }}
          />

          <SyntaxHighlighter language="json" style={nord}>
            {serializedDecodedShortSession}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
