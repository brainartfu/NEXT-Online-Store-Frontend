import { NextLayoutComponentType } from "next";
import Analytics from "../../../components/dashboard/analytics/Analytics";
import AdminLayout from "../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Analytics />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
