import { Typography, Box } from "@mui/material";
import EmailLayout from "../common/layout";

const OfferEmail = () => {
	return (
		<EmailLayout>
			<Typography textAlign="center" sx={{ mb: 3 }} fontWeight="600">
				Wishes do come true!
			</Typography>

			<Box sx={{ border: 1, borderColor: "#B0B0B0", p: 3 }}>
				<Box sx={{ bgcolor: "primary.main", py: 3.5, textAlign: "center", px: 2 }}>
					<Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2.5 }}>
						<Typography variant="h6" fontWeight="normal">
							Upto
						</Typography>
						<Typography
							sx={{
								color: "common.white",
								fontFamily: "Bangers",
								fontWeight: 400,
								textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
							}}
							variant="h2"
						>
							50%
						</Typography>
						<Typography sx={{ alignSelf: "flex-end" }} variant="h6" fontWeight="normal">
							Off
						</Typography>
					</Box>

					<Typography fontWeight="500">
						Enjoy upto 50% off on the clothing items. Because we care about you.
					</Typography>
				</Box>
				<Typography sx={{ textAlign: "center", mt: 2.5, letterSpacing: "0.2px" }} color="text.secondary">
					This exclusive offer is walid till this week. So shop before it ends!
				</Typography>
			</Box>
		</EmailLayout>
	);
};

export default OfferEmail;
