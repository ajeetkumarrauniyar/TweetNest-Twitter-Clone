import { UserAvatar } from "../client/src/components/UI Elements/Avatar";

export const UserProfile = ({ src, name, handle, showDropdown }) => (
  <button
    onClick={showDropdown}
    className="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none"
  >
    <UserAvatar/>
    <div className="hidden lg:block ml-4">
      <p className="text-sm font-bold leading-tight">{name}</p>
      <p className="text-sm leading-tight">{handle}</p>
    </div>
    <i className="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
  </button>
);

