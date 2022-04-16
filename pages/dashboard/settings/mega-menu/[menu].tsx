import { NextLayoutComponentType } from "next";
import { MegaMenu } from "../../../../components/dashboard/settings";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <MegaMenu />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
