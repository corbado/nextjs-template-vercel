"use client";

import { PasskeyList as CorbadoPasskeyList } from "@corbado/react";

export default function PasskeyList() {
  return (
    <>
      <h1 className="text-2xl font-bold text-white">User passkey details: </h1>
      <br></br> <hr style={{ opacity: "20%" }}></hr>
      <div className="mt-10">
        {" "}
        <CorbadoPasskeyList />
      </div>
    </>
  );
}
