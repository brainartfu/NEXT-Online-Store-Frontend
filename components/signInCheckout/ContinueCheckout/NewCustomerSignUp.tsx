import { Box, Typography, TextField, InputAdornment, Button, LinearProgress } from "@mui/material";
import { LockForInputSvg, MailSvg, PersonSvg } from "../../icons";
import { Label, styles } from "./ContinueCheckout";
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "../../../utils/validations/regex";
import { useEffect, useState } from "react";
import { isStrongPassword } from "../../../utils/validations";
import { useCreateUserMutation } from "../../../store/api/authApi";
import { useAppDispatch } from "../../../store/hooks";
import { useToastify } from "../../../store/slices/toastifySlice";

interface Inputs {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	reEnterPassword: string;
}

const NewCustomerSignUp = () => {
	const dispatch = useAppDispatch();
	const [createUser, { data, isLoading, error }] = useCreateUserMutation();
	const [isStrongPass, setIsStrongPass] = useState(false);

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	// handle form submit & user creation
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const { firstName, lastName, email, password, reEnterPassword } = data;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		createUser({
			name: `${firstName} ${lastName}`,
			email: email,
			username: `${firstName}`,
			password: password,
			passwordConfirmation: reEnterPassword,
		});
	};

	//  notifications
	useEffect(() => {
		if (error) dispatch(useToastify({ desc: "User create failed.", severity: "error" }));
		if (data) dispatch(useToastify({ desc: "User create successful.", severity: "success" }));
	}, [dispatch, error, data]);

	// password visual label check 🔐
	useEffect(() => {
		if (isStrongPassword(watch("password"))) {
			setIsStrongPass(true);
		} else {
			setIsStrongPass(false);
		}
	}, [watch("password")]);

	return (
		<Box sx={{ p: 2.5, ...styles.b, ...styles.bg }}>
			<Typography sx={{ fontWeight: 600 }}>New Customer</Typography>
			<Typography sx={{ fontSize: 12, my: 2.5 }}>Become a member today - it’s fast & free!</Typography>
			<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
				<Box component="div" sx={{ my: 2.5 }}>
					<Label>First Name</Label>
					<TextField
						fullWidth
						error={errors.firstName ? true : false}
						{...register("firstName", { required: "This field is required" })}
						helperText={errors.firstName && errors.firstName?.message}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PersonSvg />
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Box component="div" sx={{ my: 2.5 }}>
					<Label>Last Name</Label>
					<TextField
						fullWidth
						error={errors.lastName ? true : false}
						{...register("lastName", { required: "This field is required" })}
						helperText={errors.lastName && errors.lastName?.message}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PersonSvg />
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Box component="div" sx={{ my: 2.5 }}>
					<Label>Email address</Label>
					<TextField
						fullWidth
						type="email"
						error={errors.email ? true : false}
						{...register("email", { required: true, pattern: regex.email })}
						helperText={errors.email && "Enter a valid email address"}
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
						type="password"
						fullWidth
						error={errors.password ? true : false}
						{...register("password", {
							required: "Password is required",
							// pattern: regex.password,
							minLength: { value: 8, message: "Password must be at least 8 characters" },
						})}
						helperText={errors.password && errors.password.message}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockForInputSvg />
								</InputAdornment>
							),
						}}
					/>
					{/* password label message */}
					{watch("password")?.length ? (
						<Box sx={{ width: "100%", mt: 1.25 }}>
							<LinearProgress variant="determinate" value={isStrongPass ? 100 : 50} />
							<Typography textAlign="right" variant="body2" color="primary">
								{isStrongPass ? "Strong Password" : "Weak Password"}
							</Typography>
						</Box>
					) : null}
				</Box>
				<Box component="div" sx={{ my: 2.5 }}>
					<Label>Repeat Password</Label>
					<TextField
						type="password"
						fullWidth
						error={errors.reEnterPassword ? true : false}
						{...register("reEnterPassword", {
							required: "Please,  re-enter password & need to match",
						})}
						helperText={errors.reEnterPassword && errors.reEnterPassword.message}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LockForInputSvg />
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Button type="submit" variant="contained" color="secondary" fullWidth size="large">
					{isLoading ? "Please wait..." : "Sign Up"}
				</Button>
			</Box>
		</Box>
	);
};

export default NewCustomerSignUp;
