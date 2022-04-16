import { NextLayoutComponentType } from "next";
import { Dashboard as DashboardComp } from "../../components/dashboard";
import AdminLayout from "../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <DashboardComp />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
