import { NextLayoutComponentType } from "next";
import { Categories } from "../../../../components/dashboard/products";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <Categories />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
