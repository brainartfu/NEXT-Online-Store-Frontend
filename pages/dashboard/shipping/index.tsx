import { NextLayoutComponentType } from "next";
import AdminLayout from "../../../Layout/AdminLayout";
import { Shipping } from "../../../components/dashboard/shipping";

const DashboardHome: NextLayoutComponentType = () => {
	return <Shipping />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
