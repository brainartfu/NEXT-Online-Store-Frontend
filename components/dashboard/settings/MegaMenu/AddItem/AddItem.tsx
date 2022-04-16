import { StyledCard, StyledTextField } from "../../../components/styledComponents";
import { styled } from "@mui/material/styles";
import { CardContent, Typography, Button, Stack, Container, IconButton, Box } from "@mui/material";
import { RemoveIcon } from "../../../components/icons";

const FlexStack = styled(Box)({
	gap: 20,
	margin: "20px 0",
	display: "flex",
	alignItems: "center",
});

const AddItem = () => {
	return (
		<Box>
			<StyledCard>
				<CardContent>
					<Typography color="text.secondary" variant="body2" sx={{ mb: 2.5 }}>
						Drag the items into the order you prefer.
					</Typography>

					{/* form input */}

					<FlexStack>
						<StyledTextField fullWidth size="small" placeholder="Trending" />
						<IconButton>
							<RemoveIcon />
						</IconButton>
					</FlexStack>

					<FlexStack>
						<StyledTextField fullWidth size="small" placeholder="Clothing" />
						<IconButton>
							<RemoveIcon />
						</IconButton>
					</FlexStack>

					<FlexStack>
						<StyledTextField fullWidth size="small" placeholder="Accessories" />
						<IconButton>
							<RemoveIcon />
						</IconButton>
					</FlexStack>

					<Button>Add Item</Button>
				</CardContent>
			</StyledCard>

			<Container maxWidth="sm" sx={{ mt: 6 }}>
				<Stack direction="row" spacing={2.5}>
					<Button fullWidth variant="outlined" color="secondary">
						Cancle
					</Button>
					<Button fullWidth variant="contained" color="secondary">
						Save
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default AddItem;
