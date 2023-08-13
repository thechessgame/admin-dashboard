import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/AdjustmentsHorizontalIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarSquareIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import LogoutIcon from "@heroicons/react/24/outline/ArrowLeftOnRectangleIcon";
import SummaryIcon from "@heroicons/react/24/outline/ClipboardDocumentListIcon";
import OverviewIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import ArrowIcon from "@heroicons/react/24/outline/ArrowTrendingUpIcon";
import IssuesIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "",
    icon: <OverviewIcon className={`${iconClasses} inline`} />,
    name: "Overview",
    submenu: [
      {
        path: "/app/dashboard",
        icon: <Squares2X2Icon className={submenuIconClasses} />,
        name: "Dashboard",
      },
      {
        path: "/app/summary",
        icon: <SummaryIcon className={submenuIconClasses} />,
        name: "Summary",
      },
    ],
  },
  {
    path: "/app/users",
    icon: <UsersIcon className={iconClasses} />,
    name: "Users",
  },
  {
    path: "/app/issues",
    icon: <IssuesIcon className={iconClasses} />,
    name: "Issues",
  },
  {
    path: "/app/transactions",
    icon: <CurrencyDollarIcon className={iconClasses} />,
    name: "Transactions",
  },
  {
    path: "",
    icon: <ChartBarIcon className={`${iconClasses} inline`} />,
    name: "Report",
    submenu: [
      {
        path: "/app/todays-report",
        icon: <ArrowIcon className={submenuIconClasses} />,
        name: "Todays Report",
      },
      {
        path: "/app/weekly-report",
        icon: <ArrowIcon className={submenuIconClasses} />,
        name: "Weekly Report",
      },
      {
        path: "/app/monthly-report",
        icon: <ArrowIcon className={submenuIconClasses} />,
        name: "Monthly Report",
      },
    ],
  },
  {
    path: "/app/event",
    icon: <CalendarDaysIcon className={iconClasses} />,
    name: "Event",
  },
  {
    path: "",
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />,
    name: "General",
    submenu: [
      {
        path: "/app/profile", //url
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Profile",
      },
      {
        path: "/app/logout",
        icon: <LogoutIcon className={submenuIconClasses} />,
        name: "Logout",
      },
    ],
  },
];

export default routes;
