import { Box, Button, Container, Grid } from "@mui/material";
import { BackIconButton } from "../../../ui";
import CustomerOverview from "./CustomerOverview";
import Address from "./Address";
import Tags from "./Tags";
import TaxExemption from "./TaxExemption";
import Notes from "./Notes";
import { useRouter } from "next/router";

const AddCustomer = () => {
	const router = useRouter();
	return (
		<Box my={2.5}>
			<Box mb={3.5}>
				<BackIconButton onClick={() => router.back()}>Add Customer</BackIconButton>
			</Box>

			{/* others section */}

			<Box component="section">
				{/* Customer Overview */}
				<Box my={2.5} component="section">
					<CustomerOverview />
				</Box>

				{/* Address */}
				<Box my={2.5} component="section">
					<Address />
				</Box>

				{/*  Tax Exemption & Notes*/}
				<Box my={2.5} component="section">
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={6}>
							<TaxExemption />
						</Grid>
						<Grid item xs={12} md={6}>
							<Notes />
						</Grid>
					</Grid>
				</Box>

				{/* Tags */}
				<Box my={2.5} component="section">
					<Tags />
				</Box>

				{/* submit or cancel button */}
				<Container maxWidth="sm">
					<Box sx={{ display: "flex", gap: 2.5, mt: 5 }}>
						<Button fullWidth variant="outlined" color="secondary">
							Cancel
						</Button>
						<Button fullWidth type="submit" variant="contained" color="secondary">
							Add
						</Button>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default AddCustomer;
