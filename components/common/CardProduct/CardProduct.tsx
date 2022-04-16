import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { ProductCircularColor } from "../../styledComponents";

const FlexStack = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: 2.5,
	margin: "16px 0",
});

// just use template to view card product
const CardProduct = () => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
			{/* product image */}

			<Image
				src={IMAGES.WhiteTshirtImg}
				alt="product name"
				height={196}
				width={154}
				objectFit="cover"
				placeholder="blur"
			/>

			{/* product details twice content */}
			<Box sx={{ width: "100%" }}>
				<FlexStack>
					<Typography fontWeight={600} fontSize={18}>
						White Cotton Sweatshirt{" "}
					</Typography>
					<Typography fontWeight={500} fontSize={18}>
						$50.00
					</Typography>
				</FlexStack>
				<FlexStack>
					<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
						Quantity
					</Typography>
					<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
						1
					</Typography>
				</FlexStack>
				<FlexStack>
					<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
						Color
					</Typography>
					<ProductCircularColor color={"#EBEBEB"} className="color-circle" />
				</FlexStack>
				<FlexStack>
					<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
						Size
					</Typography>
					<Typography sx={{ color: COLORS.GRANITE_GREY }} variant="body2">
						M
					</Typography>
				</FlexStack>
			</Box>
		</Box>
	);
};

export default CardProduct;
