import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { SetActiveStepType } from "./Ratings";

const Input = styled("input")({
	display: "none",
});

const ProductImage = ({ setActiveStep }: SetActiveStepType) => {
	return (
		<>
			<Typography sx={{ mb: 3.525 }}>We&apos;d love to see it in action!</Typography>
			<Box>
				<label htmlFor="contained-button-file">
					<Input accept="image/*" id="contained-button-file" multiple type="file" />
					<Button variant="outlined" color="secondary" component="span" fullWidth>
						Upload
					</Button>
				</label>
				<Button
					sx={{ mt: 2.5, minWidth: { xs: "auto", md: 400 } }}
					onClick={() => setActiveStep(3)}
					variant="outlined"
					color="secondary"
					fullWidth
				>
					Remind me later
				</Button>
			</Box>
		</>
	);
};

export default ProductImage;
