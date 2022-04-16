import { IconButton } from "@mui/material";
import { COLORS } from "../../../theme/colors";
import { ArrowLeftIcon } from "../../../uiElements/icons";

interface IProps {
	onClick: () => void;
	color?: string;
}

const ArrowLeftIconButton = ({ onClick, color }: IProps) => {
	return (
		<IconButton onClick={onClick} sx={{ color: color || COLORS.GRANITE_GREY, padding: 0 }}>
			<ArrowLeftIcon />
		</IconButton>
	);
};

export default ArrowLeftIconButton;
