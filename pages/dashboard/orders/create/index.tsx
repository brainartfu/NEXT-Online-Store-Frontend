import { NextLayoutComponentType } from "next";
import { CreateOrder } from "../../../../components/dashboard/orders";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <CreateOrder />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
