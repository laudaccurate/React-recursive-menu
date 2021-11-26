import {
  HomeIcon,
  UserIcon,
  CogIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  LockOpenIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";

export const sideMenu = [
  {
    label: "Home",
    icon: HomeIcon,
    to: "/",
  },
  {
    label: "Profile",
    icon: UserIcon,
    to: "/profile",
  },
  {
    label: "Settings",
    icon: CogIcon,
    to: "/settings",
    children: [
      {
        label: "Account",
        icon: UserCircleIcon,
        to: "account",
      },
      {
        label: "Security",
        icon: ShieldCheckIcon,
        to: "security",
        children: [
          {
            label: "Credentials",
            icon: LockOpenIcon,
            to: "credentials",
          },
          {
            label: "2-FA",
            icon: DeviceMobileIcon,
            to: "2fa",
          },
        ],
      },
    ],
  },
];
