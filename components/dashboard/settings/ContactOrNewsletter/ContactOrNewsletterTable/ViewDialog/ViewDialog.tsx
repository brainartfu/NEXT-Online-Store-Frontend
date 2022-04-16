import { DialogContent, Typography, Box, DialogActions } from "@mui/material";
import { Popup } from "../../../../../common";
import { PopupDivider, RoundButton } from "../../../../../styledComponents";
import { StyledLabel, StyledTextBox, StyledTextField } from "../../../../components/styledComponents";

const ViewDialog = ({
	isOpenViewDialog,
	handleViewDialog,
}: {
	isOpenViewDialog: boolean;
	handleViewDialog: (toggle: boolean) => void;
}) => {
	return (
		<Popup rounded isOpen={isOpenViewDialog} isNeedCloseBtn handleTogglePopup={handleViewDialog}>
			<DialogContent>
				<Typography textAlign="center" variant="h5" fontWeight="medium">
					Contact Us / Newsletter
				</Typography>

				<PopupDivider />

				{/* form input */}
				<Box component="form">
					<StyledTextBox>
						<StyledLabel fw="500">Full Name</StyledLabel>
						<StyledTextField size="small" fullWidth defaultValue="Jhon Doe" />
					</StyledTextBox>
					<StyledTextBox>
						<StyledLabel fw="500">Amount</StyledLabel>
						<StyledTextField size="small" fullWidth type="email" defaultValue="jhon@gmail.com" />
					</StyledTextBox>
					<StyledTextBox>
						<StyledLabel fw="500">Message</StyledLabel>
						<StyledTextField
							multiline
							rows={4}
							size="small"
							fullWidth
							defaultValue="Customer message here.."
						/>
					</StyledTextBox>
					<StyledTextBox>
						<StyledLabel fw="500">Response</StyledLabel>
						<StyledTextField multiline rows={4} size="small" fullWidth placeholder="Your response here.." />
					</StyledTextBox>
				</Box>
			</DialogContent>
			<DialogActions>
				<RoundButton fullWidth onClick={() => handleViewDialog(false)} variant="outlined" color="secondary">
					Cancel
				</RoundButton>
				<RoundButton fullWidth onClick={() => handleViewDialog(false)} variant="contained" color="secondary">
					Send
				</RoundButton>
			</DialogActions>
		</Popup>
	);
};

export default ViewDialog;
