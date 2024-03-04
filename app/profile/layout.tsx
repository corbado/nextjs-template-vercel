import SideNav from "@/app/ui/profile/sidenav";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-0 flex flex flex min-h-screen flex-col items-center md:flex-row md:overflow-hidden">
      <div className="h-full w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="h-full w-full flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
