import { Box, Button, Divider, Typography } from "@mui/material";

import EmailLayout from "../common/layout";

const UserAdminEmail = () => {
	return (
		<EmailLayout>
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography>
					Hi <strong>Jhon Doe</strong> 👋
				</Typography>
				<Typography sx={{ mt: 2 }}>
					This mail contains the data of new user who recently signed up on Hoomey. Check the details below
					for verification
				</Typography>
				<Divider sx={{ my: 1.5, borderColor: "#EEEEEE" }} />
				<Box my={2} display="flex" alignItems="center" justifyContent="space-between">
					<Typography>First Name</Typography>
					<Typography>
						<strong>Mariah</strong>
					</Typography>
				</Box>
				<Box my={2} display="flex" alignItems="center" justifyContent="space-between">
					<Typography>Last Name</Typography>
					<Typography>
						<strong>Betts</strong>
					</Typography>
				</Box>
				<Box my={2} display="flex" alignItems="center" justifyContent="space-between">
					<Typography>Email Address</Typography>
					<Typography>
						<strong>Mariahbetts@abc.com</strong>
					</Typography>
				</Box>

				<Typography textAlign="center" variant="body2" color="text.secondary">
					Need to update verification status of this user? Click on the button below to go on Admin Panel.
				</Typography>

				<Box sx={{ textAlign: "center" }}>
					<Button
						size="large"
						variant="contained"
						sx={{ my: 2.5, minWidth: 228, minHeight: 56, fontSize: 16, fontWeight: 500 }}
					>
						Admin Panel
					</Button>
				</Box>
			</Box>
		</EmailLayout>
	);
};

export default UserAdminEmail;
