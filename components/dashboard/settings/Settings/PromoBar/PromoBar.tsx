import { CardContent, Typography, Box, IconButton, Button } from "@mui/material";
import { StyledCard, StyledLabel, StyledTextField } from "../../../components/styledComponents";
import { styled } from "@mui/material/styles";
import { RemoveIcon } from "../../../components/icons";
import { useState } from "react";

const FlexStack = styled(Box)({
	gap: 20,
	margin: "10px 0",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

const PromoBar = () => {
	const [promobar, setPromobar] = useState([1, 2]);

	const handleAddPromobar = () => {
		if (promobar.length) {
			const maxNumber = Math.max(...promobar);
			setPromobar((prevState) => [...prevState, maxNumber + 1]);
		} else {
			setPromobar((prevState) => [...prevState, 1]);
		}
	};

	const handleDeletePromobar = (id: number) => {
		const newPromobar = promobar.filter((e) => e !== id);
		setPromobar(newPromobar);
	};

	return (
		<StyledCard>
			<CardContent>
				<Box sx={{ mb: 2.5, display: "flex", alignItems: "center", gap: 2.5, justifyContent: "space-between" }}>
					<Typography fontWeight="medium">Promo Bar</Typography>
					<Button onClick={handleAddPromobar}>Add Promo Bar</Button>
				</Box>

				<Box>
					<StyledLabel>Text</StyledLabel>
					{promobar.map((itemNumb) => (
						<FlexStack key={itemNumb}>
							<StyledTextField
								size="small"
								placeholder="USE CODE FIRST10 FOR 10% OFF YOUR FIRST ORDER"
								fullWidth
							/>
							<IconButton onClick={() => handleDeletePromobar(itemNumb)}>
								<RemoveIcon />
							</IconButton>
						</FlexStack>
					))}
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default PromoBar;
