import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { BackIconButton } from "../../../ui";
import ContactOrNewsletterTable from "./ContactOrNewsletterTable";

const ContactOrNewsletter = () => {
	const router = useRouter();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => router.back()}>Manage Contact Us / Newsletter</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<ContactOrNewsletterTable />
			</Box>
		</Box>
	);
};

export default ContactOrNewsletter;
