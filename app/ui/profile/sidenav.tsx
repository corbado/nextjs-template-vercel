import NavLinks from "@/app/ui/profile/nav-links";
import SignoutButton from "./signout-button";

export default function SideNav() {
  return (
    <div className="flex h-full grow flex-row justify-between space-x-2 border-r border-gray-600 px-3 md:flex-col md:space-x-0 md:space-y-2 md:px-2 md:pb-40">
      <NavLinks />
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      <SignoutButton />
    </div>
  );
}
