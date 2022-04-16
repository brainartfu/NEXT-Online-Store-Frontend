import { Box, Divider, Typography } from "@mui/material";
import EmailLayout from "../common/layout";

const AdminEmail = () => {
	return (
		<EmailLayout>
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography>
					Hi <strong>Jhon Doe</strong> 👋
				</Typography>
				<Typography sx={{ mt: 2 }}>
					This mail contains the data of new user who recently signed up on Hoomey. Check the details below.
				</Typography>
				<Divider sx={{ my: 1.5, borderColor: "#EEEEEE" }} />
				<Box my={1} display="flex" alignItems="center" justifyContent="space-between">
					<Typography>Email Address</Typography>
					<Typography>
						<strong>Mariahbetts@abc.com</strong>
					</Typography>
				</Box>
			</Box>
		</EmailLayout>
	);
};

export default AdminEmail;
