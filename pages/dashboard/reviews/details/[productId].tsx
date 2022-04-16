import { NextLayoutComponentType } from "next";
import AdminLayout from "../../../../Layout/AdminLayout";
import { ReviewDetails } from "../../../../components/dashboard/reviews";

const DashboardHome: NextLayoutComponentType = () => {
	return <ReviewDetails />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
