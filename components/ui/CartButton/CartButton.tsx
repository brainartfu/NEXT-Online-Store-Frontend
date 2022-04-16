import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { BagSvg } from "../../icons";
import { useStyles } from "./styled";

const CartButton = ({ onClick, badgeContent = 1 }: { onClick: () => void; badgeContent: string | number }) => {
	const classes = useStyles();

	return (
		<Button onClick={onClick} sx={{ bgcolor: "#E2BC82", height: 44 }} className={classes.cartButton}>
			<Stack
				direction="row"
				sx={{ alignItems: "center" }}
				divider={<Divider orientation="vertical" flexItem />}
				spacing={1}
			>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<BagSvg color="#fff" width={14} height={16} />
					<Typography sx={{ fontFamily: "Euclid Circular A", textTransform: "uppercase" }}>Cart</Typography>
				</Box>
				<Typography sx={{ fontFamily: "Euclid Circular A" }} className={classes.cartBtnBadge}>
					{badgeContent}
				</Typography>
			</Stack>
		</Button>
	);
};

export default CartButton;
