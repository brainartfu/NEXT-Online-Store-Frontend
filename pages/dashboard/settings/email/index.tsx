import { NextLayoutComponentType } from "next";
import { SendingEmail } from "../../../../components/dashboard/settings";
import AdminLayout from "../../../../Layout/AdminLayout";

const DashboardHome: NextLayoutComponentType = () => {
	return <SendingEmail />;
};

DashboardHome.PageLayout = AdminLayout;

export default DashboardHome;
