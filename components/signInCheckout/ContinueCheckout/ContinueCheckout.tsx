import { Box, Button, Container, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUserLogInMutation } from "../../../store/api/authApi";
import { useAppDispatch } from "../../../store/hooks";
import { useToastify } from "../../../store/slices/toastifySlice";
import { COLORS } from "../../../theme/colors";
import { regex } from "../../../utils/validations/regex";
import { ForgetPassword } from "../../common/AuthPopup";
import { LockForInputSvg, MailSvg } from "../../icons";
import { AppDivider, HeadingText } from "../../styledComponents";
import NewCustomerSignUp from "./NewCustomerSignUp";

interface Inputs {
	username: string;
	password: string;
}

export const Label = styled(Typography)({
	marginBottom: "10px",
	fontWeight: 500,
	fontSize: 12,
});

export const styles = { b: { border: "1px solid #D6D4D4" }, bg: { background: "#FAFAFA" } };

const ContinueCheckout = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [userLogIn, { data, isLoading, error }] = useUserLogInMutation();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [isForgetPassOpen, setIsForgetPassOpen] = useState(false);

	const handleTogglePopup = (boolean: boolean) => {
		setIsForgetPassOpen(boolean);
	};

	// handle form
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const { username, password } = data;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		userLogIn({
			username: username,
			password: password,
		});
	};

	// console.log("cn", data);
	// console.log("cn2", Boolean(error));

	//  notifications
	useEffect(() => {
		if (error) dispatch(useToastify({ desc: "User log in failed.", severity: "error" }));
		if (data) dispatch(useToastify({ desc: "User log in successful.", severity: "success" }));
	}, [dispatch, error, data]);

	return (
		<Box mb={9.1}>
			<Container>
				<HeadingText>Continue to checkout</HeadingText>
				<Typography sx={{ my: 2.5, fontsize: 12, fontWeight: 500 }}>Total (1 Item) $50</Typography>
				<Grid container spacing={5}>
					<Grid item xs={12} md={6}>
						<Box sx={{ p: 2.5, ...styles.b, ...styles.bg }}>
							<Typography sx={{ fontWeight: 600 }}>Guest Checkout</Typography>
							<Typography sx={{ fontSize: 12, my: 2.5 }}>Not ready to become a member yet?</Typography>
							<Button
								onClick={() => router.push("/checkout")}
								variant="contained"
								color="secondary"
								fullWidth
								size="large"
							>
								Continue to checkout
							</Button>
						</Box>
						<AppDivider sx={{ my: 5, fontWeight: 500, color: "#727272" }}>OR</AppDivider>
						<Box sx={{ p: 2.5, ...styles.b, ...styles.bg }}>
							<Typography sx={{ fontWeight: 600 }}>Returning Customer</Typography>
							<Typography sx={{ fontSize: 12, my: 2.5 }}>
								Welcome back, Sign in for faster checkout
							</Typography>
							<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
								<Box component="div" sx={{ my: 2.5 }}>
									<Label>Email address</Label>
									<TextField
										fullWidth
										type="email"
										error={errors.username ? true : false}
										{...register("username", { required: true, pattern: regex.email })}
										helperText={errors.username && "The email address must be valid and include @"}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<MailSvg />
												</InputAdornment>
											),
										}}
									/>
								</Box>
								<Box component="div" sx={{ my: 2.5 }}>
									<Label>Password</Label>
									<TextField
										fullWidth
										type="password"
										error={errors.password ? true : false}
										{...register("password", {
											required: "Password is required",
										})}
										helperText={errors?.password?.message}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<LockForInputSvg />
												</InputAdornment>
											),
										}}
									/>
								</Box>
								<Typography
									onClick={() => handleTogglePopup(true)}
									sx={{
										cursor: "pointer",
										fontSize: 12,
										color: COLORS.GRANITE_GREY,
										textAlign: "right",
										mb: 2.5,
									}}
								>
									Forgot password?
								</Typography>
								<Button type="submit" variant="contained" color="secondary" fullWidth size="large">
									{isLoading ? "Please wait..." : "Sign In"}
								</Button>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<NewCustomerSignUp />
					</Grid>
				</Grid>
			</Container>

			{/* popup - forgot password */}
			<ForgetPassword isOpen={isForgetPassOpen} handleTogglePopup={handleTogglePopup} />
		</Box>
	);
};

export default ContinueCheckout;
