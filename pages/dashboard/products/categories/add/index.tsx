import { NextLayoutComponentType } from "next";
import { AddCategory } from "../../../../../components/dashboard/products";
import AdminLayout from "../../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <AddCategory />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
