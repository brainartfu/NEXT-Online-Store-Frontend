import { NextLayoutComponentType } from "next";
import { OrderDetails } from "../../../../components/dashboard/orders";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <OrderDetails />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
