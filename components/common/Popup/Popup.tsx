import { ReactNode } from "react";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { CloseIcon } from "../../../uiElements/icons";

export interface DialogCloseProps {
	onClick: () => void;
}

const DialogClose = (props: DialogCloseProps) => {
	const { onClick } = props;
	return (
		<DialogTitle sx={{ m: 0, p: 2 }}>
			{onClick ? (
				<IconButton
					aria-label="close"
					onClick={onClick}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

const Popup = ({
	rounded,
	children,
	isOpen,
	isNeedCloseBtn,
	handleTogglePopup,
}: {
	rounded?: boolean;
	children: ReactNode;
	isOpen: boolean;
	isNeedCloseBtn?: boolean;
	handleTogglePopup: (toggle: boolean) => void;
}) => {
	return (
		<Dialog
			fullWidth
			open={isOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: rounded ? 5 : 0, maxWidth: 700 } }}
		>
			{isNeedCloseBtn && <DialogClose onClick={() => handleTogglePopup(false)} />}

			{/* you can pass children with wrap following component */}

			{/* <DialogContent></DialogContent>
			<DialogActions></DialogActions> */}

			{children}
		</Dialog>
	);
};

export default Popup;
