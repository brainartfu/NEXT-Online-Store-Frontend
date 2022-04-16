import { Box, CardContent, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";
import { StyledCard, StyledTextField } from "../../../components/styledComponents";

const Pricing = () => {
	const [isDefaultChecked, setIsDefaultChecked] = useState(true);

	// handle default charge tax check
	const handleDefaultCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsDefaultChecked(event.target.checked);
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="bold">
					Pricing
				</Typography>
				<Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.25, mb: 1.25 }}>
					<Box sx={{ display: "flex", flexDirection: "column", minWidth: "50%" }}>
						<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="semibold">
							Price
						</Typography>
						<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
							<StyledTextField size="small" placeholder="$ 0.00" fullWidth required />
						</Box>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "column", minWidth: "50%" }}>
						<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="semibold">
							Compare at price
						</Typography>
						<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
							<StyledTextField size="small" placeholder="$ 0.00" fullWidth required />
						</Box>
					</Box>
				</Box>
				<FormControlLabel
					sx={{ mb: 2 }}
					label="Charge tax on this product"
					control={<Checkbox checked={isDefaultChecked} onChange={handleDefaultCheckChange} />}
				/>

				<Typography sx={{ fontSize: 14, mb: 1.25 }} fontWeight="bold">
					Cost per item
				</Typography>
				<Box component="form" sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
					<StyledTextField size="small" placeholder="$ 0.00" fullWidth required />
				</Box>
				<Typography sx={{ color: "#8B8B8B", fontWeight: "500", fontSize: "12px", mt: 1.25 }} fontWeight="light">
					Customer won&apos;t see this
				</Typography>
			</CardContent>
		</StyledCard>
	);
};

export default Pricing;
