import { CardContent, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../../../../uiElements";
import { DashboardDivider, RoundButton } from "../../../../styledComponents";
import { StatusText, StyledCard } from "../../../components/styledComponents";

const LastOrder = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box display="flex" alignItems="center" justifyContent="space-between" gap={2.5} mb={1.25}>
					<Typography fontWeight={600} fontSize={18}>
						Last Order
					</Typography>
					<Button sx={{ textDecoration: "underline", color: "text.secondary" }}>View all orders</Button>
				</Box>

				<Box display="flex" alignItems="center" justifyContent="space-between" gap={2.5} mb={2.5}>
					<Typography>
						Order no: <strong>12345</strong>
					</Typography>
					<StatusText fs={16}>Unfulfilled</StatusText>
				</Box>

				<Box display="flex" alignItems="center" justifyContent="space-between" gap={2.5} mb={2.5}>
					<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
						<Image src={IMAGES.TshirtLevisImg} height={50} width={50} placeholder="blur" />
						<div>
							<Typography color="text.secondary">Tshirt Levis</Typography>
							<Typography>
								Order Total: <strong>$1000</strong>
							</Typography>
						</div>
					</Box>
					<Typography sx={{ alignSelf: "flex-end" }} color="text.secondary">
						<time>30 May 2022 at 2:44 pm</time>
					</Typography>
				</Box>

				<DashboardDivider sx={{ my: 2.5 }} />

				<Box textAlign="center">
					<RoundButton variant="contained" color="secondary">
						Create Order
					</RoundButton>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default LastOrder;
