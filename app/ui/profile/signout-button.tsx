"use client";

import { useCorbado } from "@corbado/react";
import PowerIcon from "@heroicons/react/24/outline/PowerIcon";

export default function SignoutButton() {
  const { logout } = useCorbado();

  const handleSignout = async () => {
    logout();
    window.location.href = "/"; //trigger full page rerender
  };

  return (
    <button
      className="custom-button flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-white hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      onClick={handleSignout}
    >
      <PowerIcon className="w-6" />
      <div className="hidden md:block" style={{ fontSize: "18px" }}>
        Sign Out
      </div>
    </button>
  );
}
