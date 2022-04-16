import { NextLayoutComponentType } from "next";
import { AbandonedCart } from "../../../../components/dashboard/orders";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <AbandonedCart />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
