import { useEffect, useState } from "react";
import { Button, Typography, Box, Rating, IconButton } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Logo from "../../icons/Logo";
import { SmallText } from "../../styledComponents";
import Image from "next/image";
import { IMAGES } from "../../../uiElements";
import { PriceTypography } from "../../ui";
import { CloseIcon } from "../../../uiElements/icons";

// interface IProps {
// 	isOpen: boolean;
// 	handleToggle: (isToggle: boolean) => void;
// }

const CTAPopup = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = (isToggle: boolean) => {
		setIsOpen(isToggle);
	};

	useEffect(() => {
		setTimeout(() => {
			handleToggle(true);
		}, 10000);
	}, []);

	return (
		<Dialog
			open={isOpen}
			onClose={() => handleToggle(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, maxWidth: 700 } }}
		>
			<Box sx={{ position: "absolute", top: 8, right: 8 }}>
				<IconButton color="secondary" size="small" onClick={() => handleToggle(false)}>
					<CloseIcon />
				</IconButton>
			</Box>
			<DialogContent>
				<Box textAlign="center">
					<Logo />
					<Typography sx={{ mt: 3.5 }} variant="h6" fontWeight={600} fontFamily="Poppins">
						New Arrival
					</Typography>
					<SmallText sx={{ mt: 1.25 }} fontWeight={500}>
						Check out our new arrivals
					</SmallText>
				</Box>

				<Box sx={{ mt: 2.5, display: "flex", gap: 2.5 }}>
					<Image
						src={IMAGES.BlackTshirtImg}
						alt="product-image"
						width={126}
						height={173}
						objectFit="cover"
						placeholder="blur"
					/>

					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Typography sx={{ mb: 1.25 }} fontWeight={500}>
							White Cotton Sweatshirt{" "}
						</Typography>
						<PriceTypography discount={50} price={25} fontSize={12} />
						<Box component="span" sx={{ my: 1.25, display: "flex", alignItems: "center", gap: 0.6 }}>
							<Rating name="read-only" value={4} readOnly size="small" />
							<Typography sx={{ fontSize: 12 }}>(45)</Typography>
						</Box>
						<Button
							sx={{
								mt: "auto",
								fontSize: 12,
								fontWeight: 400,
								letterSpacing: 1,
								fontFamily: "Oswald",
								textTransform: "uppercase",
							}}
							fullWidth
							size="large"
							color="secondary"
							variant="contained"
						>
							Add to cart
						</Button>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default CTAPopup;
