"use client";

import { SignUp } from "@corbado/react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const onSignedUp = () => {
    window.location.href = "/profile"; //trigger full page reload
  };

  const navigateToLogin = () => {
    router.push("/login");
  };

  return <SignUp onSignedUp={onSignedUp} navigateToLogin={navigateToLogin} />;
}
