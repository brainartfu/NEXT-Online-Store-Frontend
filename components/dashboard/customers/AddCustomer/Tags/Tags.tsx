import { CardContent, Typography, Box, Stack, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledCard, StyledLabel, StyledTextField } from "../../../components/styledComponents";

const StyledChip = styled(Chip)(({ theme }) => ({
	borderRadius: 0,
	color: theme.palette.common.white,
	background: theme.palette.secondary.main,
}));

const Tags = () => {
	return (
		<StyledCard>
			<CardContent>
				<Box textAlign="center">
					<Typography gutterBottom fontWeight="medium" fontSize={18}>
						Tags
					</Typography>
					<Typography color="text.secondary" variant="body2">
						Tags can be used to categorize customer into groups.
					</Typography>
				</Box>

				<Box>
					<StyledLabel fw="500">Tags</StyledLabel>
					<StyledTextField size="small" fullWidth />
				</Box>

				{/*  existing tags*/}
				<Typography sx={{ mt: 1.25, mb: 2.5 }} variant="body2" color="text.secondary">
					Add existing tags:
				</Typography>

				<Stack direction="row" spacing={1}>
					<StyledChip label="Lorem" />
					<StyledChip label="Ipsum" />
					<StyledChip label="Lorem Ipsum" />
				</Stack>
			</CardContent>
		</StyledCard>
	);
};

export default Tags;
