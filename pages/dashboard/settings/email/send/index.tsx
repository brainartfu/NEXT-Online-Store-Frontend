import { NextLayoutComponentType } from "next";
import { SelectUsers } from "../../../../../components/dashboard/settings";
import AdminLayout from "../../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <SelectUsers />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
