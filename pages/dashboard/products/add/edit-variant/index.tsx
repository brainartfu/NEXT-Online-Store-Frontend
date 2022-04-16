import { NextLayoutComponentType } from "next";
import { EditVariant } from "../../../../../components/dashboard/products";
import AdminLayout from "../../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <EditVariant />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
