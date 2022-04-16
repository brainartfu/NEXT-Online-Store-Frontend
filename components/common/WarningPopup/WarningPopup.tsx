import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/types";
import { useAppDispatch } from "../../../store/hooks";
import { closeWarningPopup, confirmWarningPopup } from "../../../store/slices/warningSlice";

const WarningPopup = () => {
	const dispatch = useAppDispatch();
	const warningPopup = useSelector((state: RootState) => state.warningPopup);

	const handleConfirm = () => {
		dispatch(confirmWarningPopup());
	};

	const handleClose = () => {
		dispatch(closeWarningPopup());
	};

	return (
		<Dialog
			fullWidth
			open={warningPopup.isOpen}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { maxWidth: 315, textAlign: "center", borderRadius: 1 } }}
		>
			<Box sx={{ textAlign: "center", mt: 2.5, "& > svg": { height: 45, width: 45 } }}>
				<ReportGmailerrorredIcon color="error" />
			</Box>
			<DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{warningPopup.message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button fullWidth variant="outlined" color="secondary" size="large" onClick={handleClose}>
					Cancel
				</Button>
				<Button fullWidth autoFocus size="large" color="secondary" variant="contained" onClick={handleConfirm}>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default WarningPopup;
