import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, TextField, Typography } from "@mui/material";
import { IMAGES } from "../../../uiElements";
import Logo from "../../icons/Logo";
import useMediaQuery from "@mui/material/useMediaQuery";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIconButton } from "../../ui";

const NewsLetterPopup: FC = () => {
	const isWidth = useMediaQuery("(min-width:506px)");
	const [isNewsLetterOpen, setIsNewsLetterOpen] = useState(false);

	const handleTogglePopup = (boolean: boolean) => {
		setIsNewsLetterOpen(boolean);
	};

	useEffect(() => {
		setTimeout(() => {
			handleTogglePopup(true);
		}, 5000);
	}, []);

	return (
		<Dialog
			open={isNewsLetterOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, maxWidth: 720 } }}
		>
			<DialogContent sx={{ p: 0 }}>
				<CloseIconButton onClick={() => handleTogglePopup(false)} />

				<Box sx={{ display: "flex", flexDirection: isWidth ? "row" : "column" }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: isWidth ? "50%" : "100%",
							position: "relative",
						}}
					>
						<Box sx={{ height: isWidth ? "auto" : 150, "& > span": { position: "inherit !important" } }}>
							<Image src={IMAGES.PopupImg} alt="image" objectFit="cover" />
						</Box>
						<Box sx={{ position: "absolute" }}>
							<Logo />
						</Box>
					</Box>
					<Box
						sx={{
							width: isWidth ? "50%" : "100%",
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							p: 3,
						}}
					>
						<Typography
							fontFamily="Poppins"
							variant="h4"
							fontWeight="bold"
							textTransform="uppercase"
							letterSpacing="0.1em"
						>
							Newsletter
						</Typography>
						<Typography variant="body2" fontSize={12} sx={{ my: 5 }}>
							Signup here to get the latest news, updates and special offers deliverd directly to your
							inbox
						</Typography>

						<Box component="form" autoComplete="off">
							<TextField placeholder="E-mail address" size="small" fullWidth required />
							<Button
								variant="contained"
								color="secondary"
								type="submit"
								fullWidth
								sx={{
									fontFamily: "Oswald",
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									borderRadius: 0,
									fontWeight: 400,
									fontSize: 12,
									mt: 2.5,
								}}
							>
								Register
							</Button>
						</Box>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default NewsLetterPopup;
