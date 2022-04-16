import { NextLayoutComponentType } from "next";
import { Blogs } from "../../../../components/dashboard/settings";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Blogs />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
