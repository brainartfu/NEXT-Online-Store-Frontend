import { NextLayoutComponentType } from "next";
import AdminLayout from "../../../../Layout/AdminLayout";
import Reportings from "../../../../components/dashboard/analytics/Reportings";

const DashboardHome: NextLayoutComponentType = () => {
	return <Reportings />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
