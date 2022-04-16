import { CardContent, Typography } from "@mui/material";
import { StyledCard } from "../../../components/styledComponents";
import { styled } from "@mui/system";
import { AppDivider } from "../../../../styledComponents";

const FlexStack = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: 2.5,
	margin: "14px 0",
});

const MediumText = styled(Typography)({
	fontWeight: 500,
	letterSpacing: "0.2px",
});
const SemiBoldText = styled(Typography)({
	fontWeight: 600,
	letterSpacing: "1px",
});

const DeliveryDetails = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography gutterBottom fontWeight="600" fontSize={18}>
					Payment Details
				</Typography>
				<FlexStack>
					<MediumText>Subtotal</MediumText>
					<SemiBoldText>$100.00</SemiBoldText>
				</FlexStack>
				<FlexStack>
					<MediumText>USPS Priority 2-3 Days</MediumText>
					<SemiBoldText>J$5.00</SemiBoldText>
				</FlexStack>
				<FlexStack>
					<MediumText>Tax</MediumText>
					<SemiBoldText>$0.00</SemiBoldText>
				</FlexStack>

				<AppDivider />

				<FlexStack sx={{ mt: 2.5 }}>
					<Typography fontWeight="bold">Total</Typography>
					<Typography fontWeight="bold">$150</Typography>
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default DeliveryDetails;
