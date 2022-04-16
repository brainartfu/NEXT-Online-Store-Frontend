import { NextLayoutComponentType } from "next";
import { CustomerDetails } from "../../../../components/dashboard/customers";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <CustomerDetails />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
