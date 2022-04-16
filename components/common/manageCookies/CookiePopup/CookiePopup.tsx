import { Box, Button, Divider, Typography, DialogActions } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { COLORS } from "../../../../theme/colors";
import { AppSwitch, Link } from "../../../ui";
import { ROUTING_TREE } from "../../../../constants/siteUrls";

const label = { inputProps: { "aria-label": "Switch demo" } };

interface IProps {
	isOpen: boolean;
	handleToggle: (isToggle: boolean) => void;
}

const CookiePopup = ({ isOpen, handleToggle }: IProps) => {
	return (
		<Dialog
			open={isOpen}
			onClose={() => handleToggle(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, maxWidth: 700 } }}
		>
			<DialogContent>
				<Typography textAlign="center" variant="h6" fontFamily="Poppins">
					Manage Cookie Consent
				</Typography>
				<Divider sx={{ bgcolor: "#000000", my: 2.5 }} />

				<Typography textAlign="center" fontWeight="medium" sx={{ color: COLORS.GRANITE_GREY }}>
					We use cookies to optimize our website and our services. For our policies, please visit our
					<Link href={ROUTING_TREE.PRIVACY_POLICY}>
						<Button sx={{ textDecoration: "underline" }}>Privacy Policy</Button>
					</Link>
					or
					<Link href={ROUTING_TREE.TERMS_OF_SERVICE}>
						<Button sx={{ textDecoration: "underline" }}>Terms of Service</Button>
					</Link>
					page.
				</Typography>

				<Box sx={{ my: 2.25, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="h6">Functional Cookies</Typography>
					<AppSwitch {...label} defaultChecked />
				</Box>
				<Box sx={{ my: 2.25, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="h6">Marketing Cookies</Typography>
					<AppSwitch {...label} />
				</Box>
			</DialogContent>
			<DialogActions>
				<Button
					color="secondary"
					variant="contained"
					onClick={() => handleToggle(false)}
					fullWidth
					size="large"
				>
					Accept All Cookies
				</Button>
				<Button color="secondary" variant="outlined" onClick={() => handleToggle(false)} fullWidth size="large">
					Save Preferences
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CookiePopup;
