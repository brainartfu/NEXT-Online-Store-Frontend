import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { BackIconButton } from "../../../ui";
import CurrentVariants from "./CurrentVariants";
import Inventory from "./Inventory";
import Options from "./Options";
import Pricing from "./Pricing";
import Shipping from "./Shipping";
import TitleCard from "./TitleCard";

const EditVariant = () => {
	const router = useRouter();

	return (
		<div>
			<Box
				sx={{
					mb: 2,
					mt: 2,
					display: "flex",
					alignItems: "center",
					gap: 2.5,
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<BackIconButton onClick={() => router.back()}>Variant</BackIconButton>

				<Grid container spacing={2.5}>
					<Grid item xs={12} md={4}>
						<Grid container spacing={2.5}>
							<Grid item xs={12}>
								<TitleCard />
							</Grid>
							<Grid item xs={12}>
								<CurrentVariants />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={8}>
						<Grid container spacing={2.5}>
							<Grid item xs={12}>
								<Options />
							</Grid>
							<Grid item xs={12}>
								<Pricing />
							</Grid>
							<Grid item xs={12}>
								<Inventory />
							</Grid>
							<Grid item xs={12}>
								<Shipping />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={3} />
					<Grid item xs={12} md={6}>
						<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
							<Button
								sx={{ borderRadius: "5px" }}
								size="large"
								fullWidth
								variant="outlined"
								color="secondary"
							>
								Cancel
							</Button>
							<Button
								sx={{ borderRadius: "5px" }}
								size="large"
								fullWidth
								variant="contained"
								color="secondary"
							>
								Add
							</Button>
						</Box>
					</Grid>
					<Grid item xs={12} md={3} />
				</Grid>
			</Box>
		</div>
	);
};
export default EditVariant;
