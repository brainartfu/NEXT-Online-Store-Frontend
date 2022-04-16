import { Box, Typography, Button } from "@mui/material";
import EmailLayout from "../common/layout";

const NewUserEmail = () => {
	return (
		<EmailLayout>
			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Typography>
					<strong>Nice to meet you! 👋</strong>
				</Typography>
				<Typography sx={{ my: 2.5 }}>
					Hi <strong>Jhon Doe</strong> ,
				</Typography>
				<Typography sx={{ mt: 2 }}>
					Thank you for believing in our dream! Our mission is to match our customers with the right products.
					Start exploring with us!
				</Typography>
				<Box sx={{ textAlign: "center" }}>
					<Button
						size="large"
						variant="contained"
						sx={{ my: 2.5, minWidth: 228, minHeight: 56, fontSize: 16, fontWeight: 500 }}
					>
						Let’s go
					</Button>
				</Box>
				<Typography textAlign="center" variant="body2" color="text.secondary">
					If you did not sign up for this account, you can ignore this email.
				</Typography>
			</Box>
		</EmailLayout>
	);
};

export default NewUserEmail;
