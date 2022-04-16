import { NextLayoutComponentType } from "next";
import AdminLayout from "../../../Layout/AdminLayout";
import { Reviews } from "../../../components/dashboard/reviews";

const DashboardHome: NextLayoutComponentType = () => {
	return <Reviews />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
