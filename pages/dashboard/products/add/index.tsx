import { AddProduct } from "../../../../components/dashboard/products";
import AdminLayout from "../../../../Layout/AdminLayout";
import { NextLayoutComponentType } from "next";

const DashboardHome: NextLayoutComponentType = () => {
	return <AddProduct />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
