import { FC, ReactNode, useState } from "react";
import { Box, Button, Checkbox, Divider, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { AuthIconButton, CloseIconButton } from "../../../ui";
import Visibility from "@mui/icons-material/Visibility";
import { ApplesSvg, EyeCloseSvg, FacebookCircleSvg, GoogleCircleSvg, LockFillSvg, MailFillSvg } from "../../../icons";
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

// react hook form
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "../../../../utils/validations/regex";

interface Inputs {
	email: string;
	password: string;
}

interface State {
	showPassword: boolean;
}

const FieldIcon = ({ icon }: { icon: ReactNode }) => {
	return (
		<InputAdornment position="start" sx={{ "& svg": { background: "#292929" } }}>
			{icon}
		</InputAdornment>
	);
};

const SignIn: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [isSignUpOpen, setIsSignUpOpen] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsSignUpOpen(boolean);
	};

	const [values, setValues] = useState<State>({
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	// common components
	const InputAdornmentEl = () => {
		return (
			<InputAdornment position="end">
				<IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
					{values.showPassword ? <Visibility /> : <EyeCloseSvg />}
				</IconButton>
			</InputAdornment>
		);
	};

	// handle form submit
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
					<AuthTitle>Sign In</AuthTitle>
					<AuthDevider />
					<AuthSubtitle>Please fill in your login details below</AuthSubtitle>

					{/* sign up with email and password */}
					<Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
										<InputAdornment position="start">
											<InputAdornmentEl />
										</InputAdornment>
									),
								}}
							/>
						</StyledBox>

						<FormControlLabel
							sx={{ mb: 2.5 }}
							control={<Checkbox defaultChecked />}
							label="Stay Signed In"
						/>

						<Button type="submit" size="large" variant="contained" color="secondary" fullWidth>
							Sign In
						</Button>
					</Box>

					<Divider sx={{ mt: 6 }}>OR</Divider>
					{/* sign up with social account */}
					<Box my={4}>
						<AuthIconButton btnText="Sign Up with Google" icon={<GoogleCircleSvg />} />
						<AuthIconButton btnText="Sign Up with Facebook" icon={<FacebookCircleSvg />} />
						<AuthIconButton btnText="Sign Up with Apple" icon={<ApplesSvg />} />
					</Box>

					<StyledFooterBox>
						<AuthFooterTitle>Don&apos;t have an account?</AuthFooterTitle>{" "}
						<Button sx={{ fontSize: 18 }}>Sign Up</Button>
					</StyledFooterBox>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default SignIn;
