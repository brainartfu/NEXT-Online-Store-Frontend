import { StyledCard } from "../../../components/styledComponents";
import { CardContent, Typography, Box, Divider } from "@mui/material";
import { styled } from "@mui/styles";

const FlexStack = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	margin: "10px 0",
}));

const Payments = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
					Notes
				</Typography>

				<Box>
					<FlexStack>
						<Typography variant="body2" fontWeight="medium">
							Order No.
						</Typography>
						<Typography variant="body2">$0.00</Typography>
					</FlexStack>
					<FlexStack>
						<Typography variant="body2" fontWeight="medium">
							Add discount
						</Typography>
						<Typography variant="body2" fontWeight="medium">
							---
						</Typography>
						<Typography variant="body2">$0.00</Typography>
					</FlexStack>
					<FlexStack>
						<Typography variant="body2" fontWeight="medium">
							Add shipping
						</Typography>
						<Typography variant="body2" fontWeight="medium">
							---
						</Typography>
						<Typography variant="body2">$0.00</Typography>
					</FlexStack>
					<FlexStack>
						<Typography variant="body2" fontWeight="medium">
							Tax
						</Typography>
						<Typography variant="body2" fontWeight="medium">
							Not calculated
						</Typography>
						<Typography variant="body2">$0.00</Typography>
					</FlexStack>
					<FlexStack>
						<Typography variant="body2" fontWeight="bold">
							Total
						</Typography>

						<Typography variant="body2">$0.00</Typography>
					</FlexStack>

					<Divider />

					<Typography sx={{ mt: 2 }} fontWeight="medium" variant="body2">
						Add a product to calculate total and view payment options.
					</Typography>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default Payments;
