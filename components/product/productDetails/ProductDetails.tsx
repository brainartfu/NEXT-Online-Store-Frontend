import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { COLORS } from "../../../theme/colors";
import { IMAGES } from "../../../uiElements";
import { SectionBox } from "../../styledComponents";
import { Heading } from "../../ui";

const ProductDetails = () => {
	return (
		<SectionBox>
			<Container maxWidth="lg">
				<Heading text="Long Description" variant="h6" textAlign="center" />

				<SectionBox>
					<Grid container spacing={6} alignItems="center">
						{/* product description */}
						<Grid item xs={12} md={7}>
							<Heading text="Product Details" variant="h6" mb={2.5} />
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								Made of heavyweight French terry cotton. A traditional athletic staple with a more
								fitted fit. Flatlock seams prevent chafing in sensitive areas, and the ribbed crotch
								gusset provides additional elasticity as your body moves. Made of heavyweight French
								terry cotton. A traditional athletic staple with a more fitted fit. Flatlock seams
								prevent chafing in sensitive areas, and the ribbed crotch gusset provides additional
								elasticity as your body moves.Made of heavyweight French terry cotton. A traditional
								athletic staple with a more fitted fit. Flatlock seams prevent chafing in sensitive
								areas, and the ribbed crotch.
							</Typography>
						</Grid>
						{/* product image */}
						<Grid item xs={12} md={5}>
							<Image
								src={IMAGES.Justify1}
								alt={"Female"}
								// height={619}
								objectFit="cover"
								layout="responsive"
								placeholder="blur"
							/>
						</Grid>
					</Grid>
				</SectionBox>
				<SectionBox>
					<Grid container spacing={6} alignItems="center">
						{/* product image */}
						<Grid item xs={12} md={5} sx={{ order: { xs: 2, md: 1 } }}>
							<Image
								src={IMAGES.Justify2}
								alt={"Female"}
								// height={619}
								objectFit="cover"
								layout="responsive"
							/>
						</Grid>
						{/* product description */}
						<Grid item xs={12} md={7} sx={{ order: { xs: 1, md: 2 } }}>
							<Heading text="Product Details" variant="h6" mb={2.5} />
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								Made of heavyweight French terry cotton. A traditional athletic staple with a more
								fitted fit. Flatlock seams prevent chafing in sensitive areas, and the ribbed crotch
								gusset provides additional elasticity as your body moves. Made of heavyweight French
								terry cotton. A traditional athletic staple with a more fitted fit. Flatlock seams
								prevent chafing in sensitive areas, and the ribbed crotch gusset provides additional
								elasticity as your body moves.Made of heavyweight French terry cotton. A traditional
								athletic staple with a more fitted fit. Flatlock seams prevent chafing in sensitive
								areas, and the ribbed crotch.
							</Typography>
						</Grid>
					</Grid>
				</SectionBox>
				<SectionBox>
					<Grid container spacing={6} alignItems="center">
						{/* product description */}
						<Grid item xs={12} md={7}>
							<Heading text="Product Details" variant="h6" mb={2.5} />
							<Typography sx={{ color: COLORS.GRANITE_GREY }}>
								Made of heavyweight French terry cotton. A traditional athletic staple with a more
								fitted fit. Flatlock seams prevent chafing in sensitive areas, and the ribbed crotch
								gusset provides additional elasticity as your body moves. Made of heavyweight French
								terry cotton. A traditional athletic staple with a more fitted fit. Flatlock seams
								prevent chafing in sensitive areas, and the ribbed crotch gusset provides additional
								elasticity as your body moves.Made of heavyweight French terry cotton. A traditional
								athletic staple with a more fitted fit. Flatlock seams prevent chafing in sensitive
								areas, and the ribbed crotch.
							</Typography>
						</Grid>
						{/* product image */}
						<Grid item xs={12} md={5}>
							<Image
								src={IMAGES.Justify3}
								alt={"Female"}
								// height={619}
								objectFit="cover"
								layout="responsive"
							/>
						</Grid>
					</Grid>
				</SectionBox>
			</Container>
		</SectionBox>
	);
};

export default ProductDetails;
