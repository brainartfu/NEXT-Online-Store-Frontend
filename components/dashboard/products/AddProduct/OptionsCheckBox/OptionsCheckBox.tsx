import { CardContent, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";
import { StyledCard } from "../../../components/styledComponents";

const OptionsCheckBox = () => {
	const [isDefaultChecked, setIsDefaultChecked] = useState(true);

	// handle default product options check
	const handleDefaultCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsDefaultChecked(event.target.checked);
	};
	return (
		<StyledCard>
			<CardContent>
				<Typography sx={{ fontSize: 18, mb: 1.25 }} fontWeight="medium">
					Options
				</Typography>

				<FormControlLabel
					label="This product has options. Like size or color"
					control={<Checkbox checked={isDefaultChecked} onChange={handleDefaultCheckChange} />}
				/>
			</CardContent>
		</StyledCard>
	);
};

export default OptionsCheckBox;
