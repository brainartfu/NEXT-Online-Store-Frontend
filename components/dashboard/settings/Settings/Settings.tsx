import { Typography, Box, Grid } from "@mui/material";
import Manage from "./Manage";
import Coupons from "./Coupons";
import MegaMenu from "./MegaMenu";
import PromoBar from "./PromoBar";
import UserProfile from "./UserProfile";
import PaymentMethod from "./PaymentMethod";

const Settings = () => {
	return (
		<div>
			<Typography sx={{ mb: 4, mt: 2 }} variant="h6" fontWeight={600}>
				Settings
			</Typography>

			{/* settings sections */}

			<Box component="section">
				<Box component="section" sx={{ my: 2.5 }}>
					<UserProfile />
				</Box>

				{/* payment method & promo bar */}
				<Box component="section" sx={{ my: 2.5 }}>
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={6}>
							<PaymentMethod />
						</Grid>
						<Grid item xs={12} md={6}>
							<PromoBar />
						</Grid>
					</Grid>
				</Box>

				{/* mega menu & manage*/}
				<Box component="section" sx={{ my: 2.5 }}>
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={6}>
							<MegaMenu />
						</Grid>
						<Grid item xs={12} md={6}>
							<Manage />
						</Grid>
					</Grid>
				</Box>

				<Box component="section" sx={{ my: 2.5 }}>
					<Coupons />
				</Box>
			</Box>
		</div>
	);
};

export default Settings;
