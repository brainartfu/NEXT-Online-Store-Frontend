import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIconButton } from "../../ui";
import { Label } from "../../styledComponents";

interface IProps {
	isOpen: boolean;
	handleToggle: (isToggle: boolean) => void;
}

const PasswordChange = ({ isOpen, handleToggle }: IProps) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => handleToggle(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { xs: "auto", sm: 620, md: 900 } } }}
		>
			<DialogContent sx={{ py: 3, px: 5 }}>
				<CloseIconButton onClick={() => handleToggle(false)} />
				<Box>
					<Typography sx={{ textAlign: "center", fontSize: { xs: 18, sm: 24 }, fontWeight: 600 }}>
						Track your Order
					</Typography>
					<Divider sx={{ bgcolor: "#C4C4C4", my: 4 }} />
					<Typography>
						To track your order please enter your Order ID in the field below and press the{" "}
						<strong>Track</strong> button. This was given to you on your receipt and in the confirmation
						email you should have received.
					</Typography>

					<Box my={2.5}>
						<Label fontSize={18}>Order ID</Label>
						<TextField fullWidth placeholder="Found in your order confirmation email" />
					</Box>
					<Box my={2.5}>
						<Label fontSize={18}>Billing Email</Label>
						<TextField type="email" fullWidth placeholder="Email you used during checkout" />
					</Box>

					<Button size="large" variant="contained" color="secondary" fullWidth>
						Track
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default PasswordChange;
