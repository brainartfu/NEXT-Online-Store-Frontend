import { Container, Typography, Box, Button, SelectChangeEvent, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { makeStyles } from "@mui/styles";
import { CloseIcon } from "../../../uiElements/icons";
import { ColorPalette, ProductSizeSelect } from "../../common";
import { ProductCircularColor } from "../../styledComponents";
import { ArrowLeftIconButton, ArrowRightIconButton, PriceTypography } from "../../ui";

const styles = {
	display: "flex",
	alignItems: "center",
	gap: 1,
	p: 0.5,
	border: `1px solid ${COLORS.BORDER[0]}`,
};

const useStyles = makeStyles((theme) => ({
	visible: {
		transition: "0.3s",
		visibility: "visible",
		transform: "translateY(0)",
	},
	hidden: {
		transition: "0.8s",
		visibility: "hidden",
		transform: "translateY(250px)",
	},
}));

export default function FloatingAdvertise() {
	const classes = useStyles();
	const [size, setSize] = useState("10");
	const [isClose, setIsClose] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [colorPaletteAnchorEl, setColorPaletteAnchorElAnchorEl] = useState<HTMLButtonElement | null>(null);

	const color = useAppSelector((state) => state.color);

	const handleSizeChange = (event: SelectChangeEvent) => {
		setSize(event.target.value as string);
	};

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// console.log(size);

	// color palette handler
	const handleOpenColorPalette = (event: React.MouseEvent<HTMLButtonElement>) => {
		setColorPaletteAnchorElAnchorEl(event.currentTarget);
	};

	return (
		<Box sx={{ display: isClose ? "none" : "block" }}>
			<AppBar
				position="fixed"
				className={scrollPosition >= 1150 ? classes.visible : classes.hidden}
				sx={{
					// display: scrollPosition >= 1150 ? "block" : "none",
					bgcolor: "common.white",
					top: "auto",
					bottom: 0,
					p: 1,
				}}
			>
				<Toolbar>
					<Container>
						<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2.5 }}>
							<Box
								sx={{
									flex: 1,
									display: "flex",
									alignItems: { xs: "flex-start", md: "center" },
									flexDirection: { xs: "column", md: "row" },
									gap: 1,
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										width: { xs: "100%", md: "auto" },
									}}
								>
									<IconButton onClick={() => setIsClose(true)}>
										<CloseIcon />
									</IconButton>
									<Button
										sx={{ minWidth: 119, display: { xs: "block", md: "none" } }}
										color="secondary"
										variant="contained"
									>
										Add to cart
									</Button>
								</Box>
								<Box sx={{ display: "flex", gap: 1.3, alignItems: "center" }}>
									<Image
										src={IMAGES.WhiteTshirtImg}
										alt="product"
										height={70}
										width={50}
										objectFit="cover"
										placeholder="blur"
									/>
									<Typography variant="h6" sx={{ fontFamily: "Poppins" }}>
										White Cotton Sweatshirt
									</Typography>
								</Box>
							</Box>

							<Box sx={{ display: "flex", alignItems: "center", gap: 2.4 }}>
								<PriceTypography discount={90} price={50} fontSize={20} />
								{/* <ProductCircularColor color="#FFDB00" className="color-circle">
									<ColorPalette />
								</ProductCircularColor> */}
								<ProductCircularColor
									// aria-describedby={id}
									color={color.colorInHex}
									className="color-circle"
									onClick={handleOpenColorPalette}
								/>
								<ColorPalette
									anchorEl={colorPaletteAnchorEl}
									setAnchorElAnchorEl={setColorPaletteAnchorElAnchorEl}
								/>

								<Box sx={{ ...styles }}>
									<ArrowLeftIconButton onClick={() => console.log("decrement")} />
									<Typography variant="h6" sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
										1
									</Typography>
									<ArrowRightIconButton onClick={() => console.log("increment")} />
								</Box>
								<Box sx={{ ...styles }}>
									<ProductSizeSelect value={size} handleSizeChange={handleSizeChange} />
								</Box>
								<Button
									sx={{ minWidth: 119, display: { xs: "none", md: "block" } }}
									color="secondary"
									variant="contained"
								>
									Add to cart
								</Button>
							</Box>
						</Box>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
