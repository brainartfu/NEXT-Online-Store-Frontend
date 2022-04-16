import { NextLayoutComponentType } from "next";
import { AddBlog } from "../../../../../components/dashboard/settings";
import AdminLayout from "../../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <AddBlog />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
