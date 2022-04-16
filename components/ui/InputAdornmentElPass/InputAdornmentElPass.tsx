import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import { EyeCloseSvg } from "../../icons";

interface IProps {
	isShowing: boolean;
	onClick: () => void;
}

const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
	event.preventDefault();
};

const InputAdornmentElPass = ({ isShowing, onClick }: IProps) => {
	return (
		<InputAdornment position="end">
			<IconButton onClick={onClick} onMouseDown={handleMouseDownPassword} edge="end">
				{isShowing ? <Visibility /> : <EyeCloseSvg />}
			</IconButton>
		</InputAdornment>
	);
};

export default InputAdornmentElPass;
