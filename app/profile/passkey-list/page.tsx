"use client";

import { PasskeyList as CorbadoPasskeyList } from "@corbado/react";

export default function PasskeyList() {
  return (
    <>
      <h1 className="text-2xl font-bold text-white">User passkey details: </h1>
      <div className="mt-8">
        {" "}
        <CorbadoPasskeyList />
      </div>
    </>
  );
}
