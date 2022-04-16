import { CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { COLORS } from "../../../../../theme/colors";
import { IMAGES } from "../../../../../uiElements";
import { AppDivider, ProductCircularColor } from "../../../../styledComponents";
import { StyledCard } from "../../../components/styledComponents";

const FlexStack = styled("div")({
	gap: 2.5,
	display: "flex",
	margin: "16px 0",
	alignItems: "center",
	justifyContent: "space-between",
});

const TotalItem = () => {
	return (
		<div>
			<StyledCard>
				<CardContent>
					<Typography fontWeight={600} fontSize={18} gutterBottom>
						Total (2 Items)
					</Typography>

					{[...Array(2)].map((item, idx) => (
						<div key={idx}>
							{/* product view */}
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 2.5,
								}}
							>
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
							<AppDivider sx={{ my: 2.5 }} />
						</div>
					))}
				</CardContent>
			</StyledCard>
		</div>
	);
};

export default TotalItem;
