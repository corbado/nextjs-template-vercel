import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default function SessionDetails() {
  const cookieStore = cookies();
  const session = cookieStore.get("cbo_short_session");

  const decodedShortSession = jwtDecode(session?.value ?? "");
  const serializedDecodedShortSession = JSON.stringify(
    decodedShortSession,
    null,
    4,
  );
  const formattedJsonString = serializedDecodedShortSession.replace(
    /":/g,
    '":   ',
  );

  return (
    <>
      <h1 className="custom-headline text-2xl font-bold text-white">
        The following data is available in your short-term session (represented
        as JWT):
      </h1>
      <div className="mt-8 rounded-md" style={{ backgroundColor: "#0C1A48" }}>
        <div
          className="relative mb-3 mt-3"
          style={{ backgroundColor: "#0C1A48" }}
        >
          <SyntaxHighlighter language="json" style={nord}>
            {formattedJsonString}
            {serializedDecodedShortSession}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
