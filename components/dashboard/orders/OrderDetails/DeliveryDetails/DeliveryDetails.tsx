import { CardContent, Typography } from "@mui/material";
import { StatusText, StyledCard } from "../../../components/styledComponents";
import { styled } from "@mui/system";

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
	fontSize: 18,
	letterSpacing: "1px",
});

const PaymentDetails = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography gutterBottom fontWeight="600" fontSize={18}>
					Delivery Details
				</Typography>
				<FlexStack>
					<MediumText>Order Number</MediumText>
					<SemiBoldText>12345</SemiBoldText>
				</FlexStack>
				<FlexStack>
					<MediumText>Customer Name</MediumText>
					<SemiBoldText>John Doe</SemiBoldText>
				</FlexStack>
				<FlexStack>
					<MediumText>Delivery Method</MediumText>
					<SemiBoldText>Shipping</SemiBoldText>
				</FlexStack>
				<FlexStack>
					<MediumText>Payment Status</MediumText>
					<StatusText status="Paid" fs={18} fw={600}>
						Paid
					</StatusText>
				</FlexStack>
				<FlexStack>
					<MediumText>Fulfillment Status</MediumText>
					<StatusText status="Fulfilled" fs={18} fw={600}>
						Fulfilled
					</StatusText>
				</FlexStack>
			</CardContent>
		</StyledCard>
	);
};

export default PaymentDetails;
