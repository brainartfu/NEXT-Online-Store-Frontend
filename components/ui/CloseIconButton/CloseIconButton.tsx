import { IconButton } from "@mui/material";
import { CloseIcon } from "../../../uiElements/icons";

interface IProps {
	onClick: () => void;
}

const CloseIconButton = ({ onClick }: IProps) => {
	return (
		<IconButton
			size="small"
			aria-label="close"
			onClick={onClick}
			sx={{
				position: "absolute",
				right: 8,
				top: 8,
				zIndex: 5,
			}}
		>
			<CloseIcon />
		</IconButton>
	);
};

export default CloseIconButton;
