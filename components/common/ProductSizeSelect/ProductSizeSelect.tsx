import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useStyles } from "./styled";
import { COLORS } from "../../../theme/colors";

const ProductSizeSelect = ({
	value,
	handleSizeChange,
	outerFontSize,
	outerFontColor,
	iconColor,
}: {
	value: string;
	handleSizeChange: (event: SelectChangeEvent) => void;
	outerFontSize?: string | number;
	outerFontColor?: string | number;
	iconColor?: string;
}) => {
	const classes = useStyles();
	// const [size, setSize] = useState("10");

	// const handleSizeChange = (event: SelectChangeEvent) => {
	// 	setValue(event.target.value as string);
	// };

	return (
		<FormControl
			variant="standard"
			className={classes.formControl}
			sx={{
				"& .MuiInput-root": {
					color: outerFontColor || COLORS.GRANITE_GREY,
					fontSize: outerFontSize || 16,
					"& .MuiSvgIcon-root": {
						color: iconColor || COLORS.GRANITE_GREY,
					},
				},
			}}
		>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={value}
				onChange={handleSizeChange}
			>
				<MenuItem value={10}>S</MenuItem>
				<MenuItem value={20}>M</MenuItem>
				<MenuItem value={30}>L</MenuItem>
				<MenuItem value={40}>XL</MenuItem>
				<MenuItem value={50}>XXL</MenuItem>
			</Select>
		</FormControl>
	);
};

export default ProductSizeSelect;
