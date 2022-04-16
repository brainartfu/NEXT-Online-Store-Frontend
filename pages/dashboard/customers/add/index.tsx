import { NextLayoutComponentType } from "next";
import { AddCustomer } from "../../../../components/dashboard/customers";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <AddCustomer />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
