import NavLinks from '@/app/ui/profile/nav-links';
import SignoutButton from './signout-button';

export default function SideNav() {
  return (
      <div className='flex grow flex-row justify-between px-3 py-4 md:px-2 space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <div className='hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div>
        <SignoutButton />
      </div>
  );
}
