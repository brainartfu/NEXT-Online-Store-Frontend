import { NextLayoutComponentType } from "next";
import { ManageCoupon } from "../../../../components/dashboard/settings";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <ManageCoupon />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
