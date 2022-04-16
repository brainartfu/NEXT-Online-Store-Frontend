import { NextLayoutComponentType } from "next";
import { Customers } from "../../../components/dashboard/customers";
import AdminLayout from "../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Customers />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
