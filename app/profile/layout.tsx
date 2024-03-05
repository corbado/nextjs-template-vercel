import SideNav from "@/app/ui/profile/sidenav";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="custom-align relative flex min-h-screen w-full">
      <div className="z-0 flex flex flex w-full flex-col items-start md:flex-row md:overflow-hidden">
        <div className="h-full w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="custom-padding h-full w-full flex-grow md:overflow-y-auto md:pl-12 md:pr-0">
          {children}
        </div>
      </div>
    </div>
  );
}
