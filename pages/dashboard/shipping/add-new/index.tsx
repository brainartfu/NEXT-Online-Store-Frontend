import { NextLayoutComponentType } from "next";
import AdminLayout from "../../../../Layout/AdminLayout";
import { AddShipping } from "../../../../components/dashboard/shipping";

const DashboardHome: NextLayoutComponentType = () => {
	return <AddShipping />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
