import { NextLayoutComponentType } from "next";
import { ContactOrNewsletter } from "../../../../components/dashboard/settings";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <ContactOrNewsletter />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
