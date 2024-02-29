"use client";

import { Login } from "@corbado/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const onLoggedIn = () => {
    window.location.href = "/profile"; //trigger full page reload
  };

  const navigateToSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="shadow-effect my-8">
      <Login onLoggedIn={onLoggedIn} navigateToSignUp={navigateToSignup} />
    </div>
  );
}
