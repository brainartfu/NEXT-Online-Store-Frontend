import { Box, Button, Divider, Grid, IconButton, SelectChangeEvent, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/types";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { CloseIcon } from "../../../uiElements/icons";
import { ColorPalette, ProductSizeSelect } from "../../common";
import { HeadingText, ProductCircularColor, SmallText } from "../../styledComponents";
import { ArrowLeftIconButton, ArrowRightIconButton } from "../../ui";

const styles = { flexStack: { my: 0.5, display: "flex", alignItems: "center", justifyContent: "space-between" } };

const Item = () => {
	const color = useAppSelector((state: RootState) => state.color);

	const [size, setSize] = useState("10");
	const [colorPaletteAnchorEl, setColorPaletteAnchorElAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleSizeChange = (event: SelectChangeEvent) => {
		setSize(event.target.value as string);
	};
	console.log(size);

	// color palette handler
	const handleOpenColorPalette = (event: React.MouseEvent<HTMLButtonElement>) => {
		setColorPaletteAnchorElAnchorEl(event.currentTarget);
	};

	return (
		<div>
			<HeadingText sx={{ mb: 3.5 }}>Shopping Cart</HeadingText>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Box sx={{ display: "flex", gap: 2.5 }}>
					<Box component="div">
						<Image
							src={IMAGES.WhiteTshirtImg}
							alt="Product"
							height={100}
							width={72}
							objectFit="cover"
							placeholder="blur"
						/>
					</Box>
					<Box component="div">
						<Typography variant="body2" sx={{ color: COLORS.GRANITE_GREY }}>
							White Cotton Sweatshirt
						</Typography>
						<Box component="div" sx={{ ...styles.flexStack }}>
							<SmallText sx={{ color: COLORS.GRANITE_GREY }}>Quantity</SmallText>
							<Box sx={{ ...styles.flexStack }}>
								<ArrowLeftIconButton
									color={COLORS.GRANITE_GREY}
									onClick={() => console.log("decrement")}
								/>
								<Typography variant="body2" fontWeight="500">
									1
								</Typography>
								<ArrowRightIconButton
									color={COLORS.GRANITE_GREY}
									onClick={() => console.log("increment")}
								/>
							</Box>
						</Box>
						<Box sx={{ ...styles.flexStack }}>
							<SmallText sx={{ color: COLORS.GRANITE_GREY }}>Color</SmallText>

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
						</Box>
						<Box sx={{ ...styles.flexStack }}>
							<SmallText sx={{ color: COLORS.GRANITE_GREY }}>Size</SmallText>
							<ProductSizeSelect
								value={size}
								handleSizeChange={handleSizeChange}
								iconColor={COLORS.GRANITE_GREY}
								outerFontColor={COLORS.GRANITE_GREY}
								outerFontSize={12}
							/>
						</Box>
					</Box>
				</Box>
				<Box component="div">
					<IconButton size="small">
						<CloseIcon fontSize="small" />
					</IconButton>
					<SmallText sx={{ mt: 0.5, color: COLORS.GRANITE_GREY }}>$50.00</SmallText>
				</Box>
			</Box>

			<Divider sx={{ my: 2.5, background: "#C4C4C4" }} />
			<Box component="div">
				<Grid container spacing={{ xs: 2, sm: 5 }}>
					<Grid item xs={12} sm={6}>
						<Button fullWidth color="secondary" variant="outlined">
							Continue shopping
						</Button>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Button fullWidth color="secondary" variant="outlined">
							Update cart
						</Button>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Item;
