import { Container, Box, Grid } from "@mui/material";
// import { useRouter } from "next/router";
// import { SyntheticEvent } from "react";
import Billingdetails from "../billingdetails";
import ShoppingCart from "../shoppingCart";

// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";

// form types
export interface Inputs {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phone: string | number;
	country: string;
	region: string;
	city: string;
	streetAddress: string;
	apartment?: string;
	zip: string | number;
	companyName?: string;
	payWithCard: {
		cardNumber: string;
		month: string;
		year: string;
		cvv: number | string;
	};
	agree: boolean;
}

const CombineCheckout = () => {
	// const router = useRouter();

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	// handle form
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	// const handleSubmit = (event: SyntheticEvent) => {
	// 	event.preventDefault();
	// 	// eslint-disable-next-line @typescript-eslint/no-floating-promises
	// 	router.push("/order-placed");
	// };

	console.log(watch("country"));

	return (
		<Box mb={9.1}>
			<Container>
				<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={6} md={8}>
							<Billingdetails register={register} errors={errors} watch={watch} />
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<ShoppingCart register={register} errors={errors} watch={watch} />
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default CombineCheckout;
