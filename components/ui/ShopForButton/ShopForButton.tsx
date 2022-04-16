import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ShopForButton = ({ btnText }: { btnText: string }) => {
	return (
		<Button
			endIcon={<ArrowForwardIcon />}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				gap: 3,
				mt: 3,
				minWidth: 181,
				padding: "8px",
				fontFamily: "Poppins",
				fontWeight: 400,
				fontSize: 12,
			}}
			variant="outlined"
		>
			{btnText}
		</Button>
	);
};

export default ShopForButton;
