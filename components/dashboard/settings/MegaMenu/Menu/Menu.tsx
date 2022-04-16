import { StyledCard } from "../../../components/styledComponents";
import { CardContent, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const AddItem = () => {
	return (
		<StyledCard>
			<CardContent>
				<Typography fontWeight="medium" sx={{ mb: 2.5 }}>
					Menu
				</Typography>

				<FormGroup>
					<FormControlLabel control={<Checkbox defaultChecked />} label="Men" />
					<FormControlLabel control={<Checkbox />} label="Women" />
					<FormControlLabel control={<Checkbox />} label="Kids" />
				</FormGroup>
			</CardContent>
		</StyledCard>
	);
};

export default AddItem;
