import { Box, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/system";
import { colorHandler } from "../../../store/slices/colorSlice";
import { useAppDispatch } from "../../../store/hooks";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const colors = {
	blue: { name: "Blue", code: "#364C9B" },
	purple: { name: "Purple", code: "#963DA7" },
	pink: { name: "Pink", code: "#CE4589" },
	black: { name: "Black", code: "#010101" },
	red: { name: "Red", code: "#C81818" },
	orange: { name: "Orange", code: "#DA851B" },
	yellow: { name: "Yellow", code: "#FFDB00" },
	green: { name: "Green", code: "#189418" },
	white: { name: "White", code: "#FFFFFF" },
	grey: { name: "Grey", code: "#EBEBEB" },
	beige: { name: "Beige", code: "#BDA672" },
	brown: { name: "Brown", code: "#714B26" },
	gold: { name: "Gold", code: "#EDBE01" },
	silver: { name: "Silver", code: "#BDBDBD" },
};

// styled component
const ColorNameText = styled(Typography)({
	fontSize: 12,
	color: "#656565",
});

const styles = {
	height: 50,
	width: 50,
	borderRadius: "50%",
	p: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	border: "3px solid #DADADA",
};

interface State {
	blue: boolean;
	purple: boolean;
	pink: boolean;
	black: boolean;
	red: boolean;
	orange: boolean;
	yellow: boolean;
	green: boolean;
	white: boolean;
	grey: boolean;
	beige: boolean;
	brown: boolean;
	gold: boolean;
	silver: boolean;
}

const ColorCircle = ({ color }: { color: string }) => {
	return <Box sx={{ ...styles, bgcolor: color }} />;
};
const ColorCheckCircle = ({ color }: { color: string }) => {
	return (
		<Box sx={{ ...styles, bgcolor: color }}>
			<CheckIcon fontSize="large" color="secondary" />
		</Box>
	);
};

const ColorPalette = ({
	anchorEl,
	setAnchorElAnchorEl,
}: {
	// eslint-disable-next-line @rushstack/no-new-null
	anchorEl: HTMLButtonElement | null;
	// eslint-disable-next-line @rushstack/no-new-null
	setAnchorElAnchorEl: (isNull: HTMLButtonElement | null) => void;
}) => {
	const dispatch = useAppDispatch();

	const [colorCheck, setColorCheck] = useState<State>({
		blue: false,
		purple: false,
		pink: false,
		black: false,
		red: false,
		orange: false,
		yellow: false,
		green: false,
		white: false,
		grey: false,
		beige: false,
		brown: false,
		gold: false,
		silver: false,
	});

	const handleChangeColor = (color: { name: string; colorInHex: string }) => {
		dispatch(colorHandler(color.colorInHex));
		switch (color.name.toLowerCase()) {
			case "blue":
				setColorCheck({
					...colorCheck,
					blue: !colorCheck.blue,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "purple":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: !colorCheck.purple,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "pink":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: !colorCheck.pink,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "black":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: !colorCheck.black,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "red":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: !colorCheck.red,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "orange":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: !colorCheck.orange,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "yellow":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: !colorCheck.yellow,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "green":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: !colorCheck.green,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "white":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: !colorCheck.white,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "grey":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: !colorCheck.grey,
					beige: false,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "beige":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: !colorCheck.beige,
					brown: false,
					gold: false,
					silver: false,
				});
				break;
			case "brown":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: !colorCheck.brown,
					gold: false,
					silver: false,
				});
				break;
			case "gold":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: !colorCheck.gold,
					silver: false,
				});
				break;
			case "silver":
				setColorCheck({
					...colorCheck,
					blue: false,
					purple: false,
					pink: false,
					black: false,
					red: false,
					orange: false,
					yellow: false,
					green: false,
					white: false,
					grey: false,
					beige: false,
					brown: false,
					gold: false,
					silver: !colorCheck.silver,
				});
				break;
			default:
				break;
		}
	};

	// handle color palette handler
	const handleCloseColorPalette = () => {
		setAnchorElAnchorEl(null);
	};

	const isColorPaletteOpen = Boolean(anchorEl);
	const id = isColorPaletteOpen ? "simple-popover" : undefined;

	return (
		<Popover
			id={id}
			open={isColorPaletteOpen}
			anchorEl={anchorEl}
			onClose={handleCloseColorPalette}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
		>
			<Box
				className="color-palette"
				sx={{
					p: 2,
					// width: "100%",
					width: 310,

					// zIndex: "tooltip",
					display: "flex",
					flexWrap: "wrap",
					bgcolor: "common.white",
					border: "1px solid #ddd",
				}}
			>
				{/* arrow indicator -extra*/}
				{/* <Box className="color-palette-arrow" /> */}

				{/* blue color */}
				<Box textAlign="center">
					<Checkbox
						{...label}
						checked={colorCheck.blue}
						icon={<ColorCircle color={colors.blue.code} />}
						checkedIcon={<ColorCheckCircle color={colors.blue.code} />}
						onClick={() => handleChangeColor({ name: colors.blue.name, colorInHex: colors.blue.code })}
					/>
					<ColorNameText>{colors.blue.name}</ColorNameText>
				</Box>
				{/* purple color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.purple}
						icon={<ColorCircle color={colors.purple.code} />}
						checkedIcon={<ColorCheckCircle color={colors.purple.code} />}
						onClick={() => handleChangeColor({ name: colors.purple.name, colorInHex: colors.purple.code })}
					/>
					<ColorNameText>{colors.purple.name}</ColorNameText>
				</Box>
				{/* pink color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.pink}
						icon={<ColorCircle color={colors.pink.code} />}
						checkedIcon={<ColorCheckCircle color={colors.pink.code} />}
						onClick={() => handleChangeColor({ name: colors.pink.name, colorInHex: colors.pink.code })}
					/>
					<ColorNameText>{colors.pink.name}</ColorNameText>
				</Box>
				{/* black color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.black}
						icon={<ColorCircle color={colors.black.code} />}
						checkedIcon={<ColorCheckCircle color={colors.black.code} />}
						onClick={() => handleChangeColor({ name: colors.black.name, colorInHex: colors.black.code })}
					/>
					<ColorNameText>{colors.black.name}</ColorNameText>
				</Box>
				{/* red color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.red}
						icon={<ColorCircle color={colors.red.code} />}
						checkedIcon={<ColorCheckCircle color={colors.red.code} />}
						onClick={() => handleChangeColor({ name: colors.red.name, colorInHex: colors.red.code })}
					/>
					<ColorNameText>{colors.red.name}</ColorNameText>
				</Box>
				{/* orange color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.orange}
						icon={<ColorCircle color={colors.orange.code} />}
						checkedIcon={<ColorCheckCircle color={colors.orange.code} />}
						onClick={() => handleChangeColor({ name: colors.orange.name, colorInHex: colors.orange.code })}
					/>
					<ColorNameText>{colors.orange.name}</ColorNameText>
				</Box>
				{/* yellow color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.yellow}
						icon={<ColorCircle color={colors.yellow.code} />}
						checkedIcon={<ColorCheckCircle color={colors.yellow.code} />}
						onClick={() => handleChangeColor({ name: colors.yellow.name, colorInHex: colors.yellow.code })}
					/>
					<ColorNameText>{colors.yellow.name}</ColorNameText>
				</Box>
				{/* green color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.green}
						icon={<ColorCircle color={colors.green.code} />}
						checkedIcon={<ColorCheckCircle color={colors.green.code} />}
						onClick={() => handleChangeColor({ name: colors.green.name, colorInHex: colors.green.code })}
					/>
					<ColorNameText>{colors.green.name}</ColorNameText>
				</Box>
				{/* white color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.white}
						icon={<ColorCircle color={colors.white.code} />}
						checkedIcon={<ColorCheckCircle color={colors.white.code} />}
						onClick={() => handleChangeColor({ name: colors.white.name, colorInHex: colors.white.code })}
					/>
					<ColorNameText>{colors.white.name}</ColorNameText>
				</Box>
				{/* Grey color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.grey}
						icon={<ColorCircle color={colors.grey.code} />}
						checkedIcon={<ColorCheckCircle color={colors.grey.code} />}
						onClick={() => handleChangeColor({ name: colors.grey.name, colorInHex: colors.grey.code })}
					/>
					<ColorNameText>{colors.grey.name}</ColorNameText>
				</Box>
				{/* beige color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.beige}
						icon={<ColorCircle color={colors.beige.code} />}
						checkedIcon={<ColorCheckCircle color={colors.beige.code} />}
						onClick={() => handleChangeColor({ name: colors.beige.name, colorInHex: colors.beige.code })}
					/>
					<ColorNameText>{colors.beige.name}</ColorNameText>
				</Box>
				{/* brown color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.brown}
						icon={<ColorCircle color={colors.brown.code} />}
						checkedIcon={<ColorCheckCircle color={colors.brown.code} />}
						onClick={() => handleChangeColor({ name: colors.brown.name, colorInHex: colors.brown.code })}
					/>
					<ColorNameText>{colors.brown.name}</ColorNameText>
				</Box>
				{/* gold color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.gold}
						icon={<ColorCircle color={colors.gold.code} />}
						checkedIcon={<ColorCheckCircle color={colors.gold.code} />}
						onClick={() => handleChangeColor({ name: colors.gold.name, colorInHex: colors.gold.code })}
					/>
					<ColorNameText>{colors.gold.name}</ColorNameText>
				</Box>
				{/* silver color */}
				<Box textAlign="center">
					<Checkbox
						checked={colorCheck.silver}
						icon={<ColorCircle color={colors.silver.code} />}
						checkedIcon={<ColorCheckCircle color={colors.silver.code} />}
						onClick={() => handleChangeColor({ name: colors.silver.name, colorInHex: colors.silver.code })}
					/>
					<ColorNameText>{colors.silver.name}</ColorNameText>
				</Box>
			</Box>
		</Popover>
	);
};

export default ColorPalette;
