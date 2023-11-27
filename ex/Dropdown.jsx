import { Button } from "./Button";

export const DropdownContent = ({ showDropdown, user }) => (
  <div className="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
    {/* User Profile Info */}
    <Button
      onClick={showDropdown}
      className="p-3 flex items-center w-full hover:bg-lightest focus:outline-none"
    >
      {/* <img
        src={user.src}
        className="w-10 h-10 rounded-full border border-lighter"
        alt="Profile"
      /> */}
      <div className="ml-4">
        <p className="text-sm font-bold leading-tight">{user.name}</p>
        <p className="text-sm leading-tight">{user.handle}</p>
      </div>
      <i className="fas fa-check ml-auto test-blue"></i>
    </Button>
    {/* Additional Dropdown Options */}
    <Button
      onClick={showDropdown}
      className="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
    >
      Add an existing account
    </Button>
    <Button
      onClick={showDropdown}
      className="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none"
    >
      Log out {user.handle}
    </Button>
  </div>
);

