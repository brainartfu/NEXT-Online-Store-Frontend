import { styled } from "@mui/system";

const ProductCircularColor = styled("button")(({ color }: { color: string }) => ({
	width: "15px",
	height: "18px",
	cursor: "pointer",
	background: color,
	borderRadius: "100%",
	border: "3px solid #797979",
}));

export default ProductCircularColor;
