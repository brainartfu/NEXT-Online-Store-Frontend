import { Box, Button, Container, Typography, Collapse } from "@mui/material";
import { FC, useState } from "react";
import CookiePopup from "./CookiePopup";

const ManageCookies: FC = () => {
	const [isCookieOpen, setIsCookieOpen] = useState(false);
	const [isAccept, setIsAccept] = useState(false);

	const handleTogglePopup = (boolean: boolean) => {
		setIsCookieOpen(boolean);
	};

	// hangle cookie accept
	const handleAcceptCookies = () => {
		setIsAccept(true);
	};

	return (
		<Collapse in={!isAccept}>
			<Box sx={{ background: "#1F1F1F", py: 1.8 }}>
				<Container maxWidth="lg">
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: { xs: 2.5, md: 7 },
							flexWrap: "wrap",
							justifyContent: { xs: "center", md: '"flex-end"' },
							textAlign: "right",
						}}
					>
						<Typography
							sx={{
								fontSize: 12,
								color: "#fff",
								textAlign: "center",
								letterSpacing: "0.04em",
								fontFamily: "Poppins",
							}}
						>
							This site uses cookies to improve your experience. By clicking, you agree to our Privacy
							Policy.
						</Typography>
						<Box>
							<Button
								variant="contained"
								onClick={handleAcceptCookies}
								sx={{ fontSize: 10, mr: 1, fontFamily: "Poppins", letterSpacing: "0.04em" }}
							>
								Accept Cookies
							</Button>
							<Button
								onClick={() => handleTogglePopup(true)}
								variant="text"
								sx={{
									fontFamily: "Poppins",
									letterSpacing: "0.04em",
									textDecoration: "underline",
									color: "#fff",
									fontSize: 10,
								}}
							>
								Manage Cookies
							</Button>
						</Box>
					</Box>
				</Container>

				{/* manage cookie  - popup*/}
				<CookiePopup handleToggle={handleTogglePopup} isOpen={isCookieOpen} />
			</Box>
		</Collapse>
	);
};

export default ManageCookies;
