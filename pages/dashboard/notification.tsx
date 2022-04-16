import { NextLayoutComponentType } from "next";
import { Notification } from "../../components/dashboard";
import AdminLayout from "../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Notification />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
