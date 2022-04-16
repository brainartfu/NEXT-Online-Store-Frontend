import { FC, ReactNode, useEffect, useState } from "react";
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	InputAdornment,
	TextField,
	LinearProgress,
	Typography,
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { AuthIconButton, CloseIconButton, InputAdornmentElPass, Link } from "../../../ui";
import { ApplesSvg, FacebookCircleSvg, GoogleCircleSvg, LockFillSvg, MailFillSvg, PersonFillSvg } from "../../../icons";
import { Label } from "../../../styledComponents";
import {
	AuthDevider,
	AuthFooterTitle,
	AuthSubtitle,
	AuthTitle,
	StyedTextField,
	StyledBox,
	StyledFooterBox,
} from "../styledComponents";
import { isStrongPassword } from "../../../../utils/validations";

// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "../../../../utils/validations/regex";
interface Inputs {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface State {
	showPassword: boolean;
	showConfirmPassword: boolean;
}

const FieldIcon = ({ icon }: { icon: ReactNode }) => {
	return (
		<InputAdornment position="start" sx={{ "& svg": { background: "#292929" } }}>
			{icon}
		</InputAdornment>
	);
};

const SignUp: FC = () => {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [isStrongPass, setIsStrongPass] = useState(false);
	const [isSignUpOpen, setIsSignUpOpen] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsSignUpOpen(boolean);
	};

	const [values, setValues] = useState<State>({
		showPassword: false,
		showConfirmPassword: false,
	});

	// handle password visibility
	const handleClickShowPassword = (props: { key: string; value: boolean }) => {
		setValues({ ...values, [props.key]: !props.value });
	};

	// password check 🔐
	useEffect(() => {
		if (watch("password")) {
			if (isStrongPassword(watch("password"))) {
				setIsStrongPass(true);
			} else {
				setIsStrongPass(false);
			}
		}
	}, [watch("password")]);

	//  handle form submit
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Dialog
			open={isSignUpOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { xs: "auto", sm: 620, md: 900 } } }}
		>
			<DialogContent sx={{ py: 3, px: 5 }}>
				<CloseIconButton onClick={() => handleTogglePopup(false)} />
				<Box>
					<AuthTitle>Sign Up</AuthTitle>
					<AuthDevider />
					<AuthSubtitle>
						Registering makes checkout fast and easy and saves your order information in your account.
					</AuthSubtitle>

					{/* sign up with social account */}
					<Box my={4}>
						<AuthIconButton btnText="Sign Up with Google" icon={<GoogleCircleSvg />} />
						<AuthIconButton btnText="Sign Up with Facebook" icon={<FacebookCircleSvg />} />
						<AuthIconButton btnText="Sign Up with Apple" icon={<ApplesSvg />} />
					</Box>

					<Divider>OR</Divider>

					{/* sign up with email and password */}
					<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
						{/* first name */}
						<StyledBox>
							<Label fontSize={18}>First Name</Label>
							<StyedTextField
								error={errors.firstName ? true : false}
								{...register("firstName", { required: "First name is required." })}
								helperText={errors.firstName && errors.firstName?.message}
								InputProps={{ startAdornment: <FieldIcon icon={<PersonFillSvg />} /> }}
							/>
						</StyledBox>

						{/* last name */}
						<StyledBox>
							<Label fontSize={18}>Last Name</Label>
							<StyedTextField
								error={errors.lastName ? true : false}
								{...register("lastName", { required: "Last name is required." })}
								helperText={errors.lastName && errors.lastName?.message}
								InputProps={{ startAdornment: <FieldIcon icon={<PersonFillSvg />} /> }}
							/>
						</StyledBox>

						{/* email address */}
						<StyledBox>
							<Label fontSize={18}>Email Address *</Label>
							<StyedTextField
								type="email"
								error={errors.email ? true : false}
								{...register("email", { required: true, pattern: regex.email })}
								helperText={errors.email && "Enter a valid email address"}
								InputProps={{ startAdornment: <FieldIcon icon={<MailFillSvg />} /> }}
							/>
						</StyledBox>

						{/* password */}
						<StyledBox>
							<Label fontSize={18}>Password</Label>
							<TextField
								fullWidth
								error={errors.password ? true : false}
								{...register("password", {
									required: "Password is required",
									minLength: { value: 8, message: "Password must be at least 8 characters" },
								})}
								helperText={errors.password && errors.password.message}
								type={values.showPassword ? "text" : "password"}
								sx={{ "& .MuiOutlinedInput-root": { pl: 0 } }}
								InputProps={{
									startAdornment: <FieldIcon icon={<LockFillSvg />} />,
									endAdornment: (
										<InputAdornmentElPass
											isShowing={values.showPassword}
											onClick={() =>
												handleClickShowPassword({
													key: "showPassword",
													value: values.showPassword,
												})
											}
										/>
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
						</StyledBox>

						{/* confirm password */}
						<StyledBox>
							<Label fontSize={18}>Confirm Password *</Label>
							<TextField
								fullWidth
								error={errors.confirmPassword ? true : false}
								{...register("confirmPassword", {
									required: "Please,  re-enter password & need to match",
								})}
								helperText={errors.confirmPassword && errors.confirmPassword.message}
								type={values.showConfirmPassword ? "text" : "password"}
								sx={{ "& .MuiOutlinedInput-root": { pl: 0 } }}
								InputProps={{
									startAdornment: <FieldIcon icon={<LockFillSvg />} />,
									endAdornment: (
										<InputAdornmentElPass
											isShowing={values.showConfirmPassword}
											onClick={() =>
												handleClickShowPassword({
													key: "showConfirmPassword",
													value: values.showConfirmPassword,
												})
											}
										/>
									),
								}}
							/>
						</StyledBox>

						{/* check terms of service */}
						<FormControlLabel
							sx={{ mb: 2.5 }}
							control={<Checkbox defaultChecked />}
							label={
								<>
									I agree to the{" "}
									<Link href="/terms-of-service">
										<Button sx={{ textDecoration: "underline" }}>Terms of Service</Button> &{" "}
									</Link>
									<Link href="/privacy-policy">
										<Button sx={{ textDecoration: "underline" }}>Privacy Policy</Button>
									</Link>
								</>
							}
						/>

						<Button type="submit" size="large" variant="contained" color="secondary" fullWidth>
							Sign Up
						</Button>
					</Box>

					{/* action for already sign in*/}
					<StyledFooterBox>
						<AuthFooterTitle>Already have an account?</AuthFooterTitle>{" "}
						<Button sx={{ fontSize: 18 }}>Sign In</Button>
					</StyledFooterBox>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default SignUp;
