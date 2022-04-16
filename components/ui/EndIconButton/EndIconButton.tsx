import { Button } from "@mui/material";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	endIcon: React.ReactNode;
	children: React.ReactNode;
}

const EndIconButton = ({ onClick, endIcon, children, ...props }: IProps) => {
	return (
		<Button
			{...props}
			onClick={onClick}
			fullWidth
			variant="contained"
			color="secondary"
			sx={{ display: "flex", alignItems: "center" }}
		>
			<span style={{ flex: 1 }}>{children}</span>
			{endIcon}
		</Button>
	);
};

export default EndIconButton;
