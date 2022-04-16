import {
	Box,
	Typography,
	DialogContent,
	DialogActions,
	InputAdornment,
	FormControlLabel,
	Checkbox,
	Grid,
} from "@mui/material";
import { Popup } from "../../../../../common";
import { DashboardDivider, PopupDivider, RoundButton } from "../../../../../styledComponents";
import { StyledLabel, StyledTextBox, StyledTextField } from "../../../../components/styledComponents";

const ManageDialog = ({ isOpen, handleDialog }: { isOpen: boolean; handleDialog: (toggle: boolean) => void }) => {
	return (
		<Popup rounded isOpen={isOpen} isNeedCloseBtn handleTogglePopup={handleDialog}>
			<DialogContent>
				<Typography textAlign="center" variant="h5" fontWeight="medium">
					Add Rate
				</Typography>

				<PopupDivider />

				{/* form input */}
				<Box component="form">
					<StyledTextBox>
						<StyledLabel fw="500">Rate Name</StyledLabel>
						<StyledTextField size="small" fullWidth defaultValue="Standard Shipping" />
					</StyledTextBox>
					<StyledTextBox>
						<StyledLabel fw="500">Price</StyledLabel>
						<StyledTextField
							size="small"
							fullWidth
							defaultValue="100"
							InputProps={{
								startAdornment: <InputAdornment position="start">$</InputAdornment>,
							}}
						/>
					</StyledTextBox>
				</Box>

				<DashboardDivider sx={{ my: 2.5 }} />
				{/* based on weight */}
				<StyledTextBox>
					<StyledLabel fw="500">Conditions</StyledLabel>
					<FormControlLabel
						sx={{ "& span": { fontWeight: 500 } }}
						control={<Checkbox defaultChecked />}
						label="Based on order weight"
					/>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel>Minimum Weight</StyledLabel>
							<StyledTextField
								size="small"
								fullWidth
								defaultValue="0"
								InputProps={{
									startAdornment: <InputAdornment position="start">Ib</InputAdornment>,
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel>Maximum Weight</StyledLabel>
							<StyledTextField
								size="small"
								fullWidth
								defaultValue="0"
								InputProps={{
									startAdornment: <InputAdornment position="start">Ib</InputAdornment>,
								}}
							/>
						</Grid>
					</Grid>
				</StyledTextBox>

				{/* based on price */}
				<StyledTextBox>
					<FormControlLabel
						sx={{ "& span": { fontWeight: 500 } }}
						control={<Checkbox defaultChecked />}
						label="Based on price"
					/>
					<Grid container spacing={2.5}>
						<Grid item xs={12} sm={6}>
							<StyledLabel>Minimum Weight</StyledLabel>
							<StyledTextField
								size="small"
								fullWidth
								defaultValue="0"
								InputProps={{
									startAdornment: <InputAdornment position="start">$</InputAdornment>,
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<StyledLabel>Maximum Weight</StyledLabel>
							<StyledTextField
								size="small"
								fullWidth
								defaultValue="0"
								InputProps={{
									startAdornment: <InputAdornment position="start">$</InputAdornment>,
								}}
							/>
						</Grid>
					</Grid>
				</StyledTextBox>
			</DialogContent>
			<DialogActions>
				<RoundButton fullWidth onClick={() => handleDialog(false)} variant="outlined" color="secondary">
					Cancel
				</RoundButton>
				<RoundButton fullWidth onClick={() => handleDialog(false)} variant="contained" color="secondary">
					Save
				</RoundButton>
			</DialogActions>
		</Popup>
	);
};

export default ManageDialog;
