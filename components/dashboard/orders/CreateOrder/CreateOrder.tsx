import { Box, Grid, Button, Container } from "@mui/material";
import Products from "./Products";
import Customer from "./Customer";
import Payments from "./Payments";
import Notes from "./Notes";
import Tags from "./Tags";
import { BackIconButton } from "../../../ui";
import { useRouter } from "next/router";

function CreateOrder() {
	const router = useRouter();
	return (
		<Box my={2.5}>
			{/* back to order tab */}
			<Box mb={3.5}>
				<BackIconButton onClick={() => router.back()}>Create Order</BackIconButton>
			</Box>

			{/*  products & customer */}
			<Grid container spacing={2.5}>
				<Grid item xs={12} md={6}>
					<Products />
				</Grid>
				<Grid item xs={12} md={6}>
					<Customer />
				</Grid>
			</Grid>

			{/*  payments , notes & tags */}
			<Box component="section" my={2.5}>
				<Grid container spacing={2.5}>
					<Grid item xs={12} md={6}>
						<Payments />
					</Grid>
					<Grid item xs={12} md={6}>
						<Grid container spacing={2.5}>
							{/* nots */}
							<Grid item xs={12}>
								<Notes />
							</Grid>
							{/* tags */}
							<Grid item xs={12}>
								<Tags />
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Box component="section" mt={5}>
					<Container maxWidth="sm">
						<Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
							<Button size="large" fullWidth variant="outlined" color="secondary">
								Cancel
							</Button>
							<Button size="large" fullWidth variant="contained" color="secondary">
								Create
							</Button>
						</Box>
					</Container>
				</Box>
			</Box>
		</Box>
	);
}

export default CreateOrder;
