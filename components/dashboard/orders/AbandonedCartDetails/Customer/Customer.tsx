import { CardContent, Typography, Box } from "@mui/material";
import { IMAGES } from "../../../../../uiElements";
import { AppAvatar, DashboardDivider } from "../../../../styledComponents";
import { StyledCard } from "../../../components/styledComponents";

const Customer = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ mb: 2.5 }} fontWeight={600} fontSize={18}>
					Customer
				</Typography>

				<Box sx={{ display: "flex", gap: 2.5, alignItems: "center" }}>
					<AppAvatar src={IMAGES.AvatarImg} alt="avatar" objectFit="cover" height={60} width={60} />

					<div>
						<Typography gutterBottom>Hi</Typography>
						<Typography fontWeight="600">Jhon Doe</Typography>
					</div>
				</Box>

				<DashboardDivider sx={{ my: 2.5 }} />

				<Typography sx={{ mb: 2.5 }} fontSize={18} fontWeight={500}>
					Shipping Address
				</Typography>

				<Typography>
					Lorem ipsum <br /> 123 Street <br /> Oxford Wisconsin 123456 <br /> United States <br />
					<br /> +190123456789
				</Typography>

				<DashboardDivider sx={{ my: 2.5 }} />

				<Typography fontSize={18} fontWeight="medium">
					Billing Address
				</Typography>

				<Typography sx={{ mt: 2.5 }}>Same as shipping address</Typography>
			</CardContent>
		</StyledCard>
	);
};

export default Customer;
