import {
	Box,
	Select,
	MenuItem,
	Typography,
	FormControl,
	DialogContent,
	DialogActions,
	SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { Popup } from "../../../../common";
import { KeyboardArrowDownIcon } from "../../../../../uiElements/icons";
import { PopupDivider, RoundButton } from "../../../../styledComponents";
import { StyledLabel, StyledTextBox, StyledTextField } from "../../../components/styledComponents";

const TaxesDialog = ({ isOpen, handleDialog }: { isOpen: boolean; handleDialog: (toggle: boolean) => void }) => {
	const [priority, setPriority] = useState("10");

	// priority handler
	const handlePriorityChange = (event: SelectChangeEvent) => {
		setPriority(event.target.value as string);
	};

	return (
		<Popup rounded isOpen={isOpen} isNeedCloseBtn handleTogglePopup={handleDialog}>
			<DialogContent>
				<Typography textAlign="center" variant="h5" fontWeight="medium">
					Taxes
				</Typography>

				<PopupDivider />

				{/* form input */}
				<Box component="form">
					<StyledTextBox>
						<StyledLabel fw="500">Title</StyledLabel>
						<StyledTextField size="small" fullWidth defaultValue="Title" />
					</StyledTextBox>
					<StyledTextBox>
						<StyledLabel fw="500">Percentage (%)</StyledLabel>
						<StyledTextField size="small" fullWidth defaultValue="Percentage (%)" />
					</StyledTextBox>
					<StyledTextBox>
						<StyledLabel fw="500">Priority</StyledLabel>
						<FormControl
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 1,
								},
							}}
							fullWidth
							size="small"
						>
							<Select
								IconComponent={KeyboardArrowDownIcon}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={priority}
								onChange={handlePriorityChange}
							>
								<MenuItem value={10}>Priority</MenuItem>
								<MenuItem value={20}>Priority 2</MenuItem>
							</Select>
						</FormControl>
					</StyledTextBox>
				</Box>
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

export default TaxesDialog;
