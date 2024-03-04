"use client";

import { PasskeyList as CorbadoPasskeyList } from "@corbado/react";

export default function PasskeyList() {
  return (
    <>
      <p className="text-white">User passkey details: </p>
      <div className="mt-8 text-white">
        {" "}
        <CorbadoPasskeyList />
      </div>
    </>
  );
}
