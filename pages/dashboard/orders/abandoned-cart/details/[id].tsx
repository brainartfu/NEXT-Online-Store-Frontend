import { NextLayoutComponentType } from "next";
import { AbandonedCartDetails } from "../../../../../components/dashboard/orders";
import AdminLayout from "../../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <AbandonedCartDetails />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
