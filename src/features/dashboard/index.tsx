import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";

import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DashboardTopBar from "./components/DashboardTopBar";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DoughnutChart from "./components/DoughnutChart";

const statsData = [
  { title: "New Users", value: "34.7k", icon: <UserGroupIcon className="w-8 h-8" />, description: "↗︎ 2300 (22%)" },
  {
    title: "Total Sales",
    value: "$34,545",
    icon: <CreditCardIcon className="w-8 h-8" />,
    description: "Current month",
  },
  {
    title: "Pending users",
    value: "450",
    icon: <CircleStackIcon className="w-8 h-8" />,
    description: "50 in hot users",
  },
  { title: "Active Users", value: "5.6k", icon: <UsersIcon className="w-8 h-8" />, description: "↙ 300 (18%)" },
];

function Dashboard() {
  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange: { startDate: Date; endDate: Date }) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({ message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status: 1 })
    );
  };

  return <></>;
}

export default Dashboard;
