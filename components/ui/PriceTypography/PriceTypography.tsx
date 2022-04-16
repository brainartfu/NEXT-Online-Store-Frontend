import { Typography } from "@mui/material";

interface IProps {
	discount: number;
	price: number;
	fontSize?: number | string;
}

const PriceTypography = ({ discount, price, fontSize }: IProps) => {
	return (
		<Typography color="primary" sx={{ fontWeight: 500, fontSize: fontSize || 16 }}>
			<del style={{ color: "#757575" }}>${discount.toFixed(2)}</del> ${price.toFixed(2)}
		</Typography>
	);
};

export default PriceTypography;
