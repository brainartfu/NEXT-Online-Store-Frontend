import { ReactNode } from "react";
import { Box, Button, InputAdornment } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIconButton } from "../../../ui";
import { MailFillSvg } from "../../../icons";
import { Label } from "../../../styledComponents";
import { AuthDevider, AuthSubtitle, AuthTitle, StyedTextField, StyledBox } from "../styledComponents";
import { IPopup } from "../../../../types/popup";

const FieldIcon = ({ icon }: { icon: ReactNode }) => {
	return (
		<InputAdornment position="start" sx={{ "& svg": { background: "#292929" } }}>
			{icon}
		</InputAdornment>
	);
};

const PasswordChange = ({ isOpen, handleTogglePopup }: IPopup) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { xs: "auto", sm: 620, md: 900 } } }}
		>
			<DialogContent sx={{ py: 3, px: 5 }}>
				<CloseIconButton onClick={() => handleTogglePopup(false)} />
				<Box>
					<AuthTitle>Forget Password</AuthTitle>
					<AuthDevider />
					<AuthSubtitle>Please enter your email address</AuthSubtitle>

					{/* sign up with email and password */}
					<Box component="form" autoComplete="off">
						<StyledBox>
							<Label fontSize={18}>Email Address *</Label>
							<StyedTextField
								required
								type="email"
								InputProps={{ startAdornment: <FieldIcon icon={<MailFillSvg />} /> }}
							/>
						</StyledBox>

						<Button type="submit" size="large" variant="contained" color="secondary" fullWidth>
							Confirm
						</Button>
						<AuthSubtitle sx={{ mt: 3, textAlign: "center" }}>
							We will send you the mail with your password reset link
						</AuthSubtitle>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default PasswordChange;
