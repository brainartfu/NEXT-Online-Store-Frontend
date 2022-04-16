import { useEffect } from "react";
import { FC, ReactNode, useState } from "react";
import { Box, Button, InputAdornment } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CloseIconButton, InputAdornmentElPass } from "../../../ui";
import { LockFillSvg } from "../../../icons";
import { Label } from "../../../styledComponents";
import { AuthDevider, AuthTitle, StyedTextField, StyledBox } from "../styledComponents";

// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
import { isStrongPassword } from "../../../../utils/validations";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

interface Inputs {
	currentPassword: string;
	newPassword: string;
	reEnterNewPassword: string;
}

interface State {
	showCurrentPassword: boolean;
	showNewPassword: boolean;
	showReEnterPassword: boolean;
}

const FieldIcon = ({ icon }: { icon: ReactNode }) => {
	return (
		<InputAdornment position="start" sx={{ "& svg": { background: "#292929" } }}>
			{icon}
		</InputAdornment>
	);
};

const PasswordChange: FC = () => {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [isStrongPass, setIsStrongPass] = useState(false);
	const [isPasswordOpen, setIsPasswordOpen] = useState(true);

	const handleTogglePopup = (boolean: boolean) => {
		setIsPasswordOpen(boolean);
	};

	const [values, setValues] = useState<State>({
		showCurrentPassword: false,
		showNewPassword: false,
		showReEnterPassword: false,
	});

	// password visibility handler
	const handleClickShowPassword = (props: { key: string; value: boolean }) => {
		setValues({ ...values, [props.key]: !props.value });
	};

	// password strong label check 🔐
	useEffect(() => {
		if (watch("newPassword")) {
			if (isStrongPassword(watch("newPassword"))) {
				setIsStrongPass(true);
			} else {
				setIsStrongPass(false);
			}
		}
	}, [watch("newPassword")]);

	// handle form submit
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Dialog
			open={isPasswordOpen}
			onClose={() => handleTogglePopup(false)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			sx={{ "& .MuiPaper-root": { borderRadius: 0, minWidth: { xs: "auto", sm: 620, md: 900 } } }}
		>
			<DialogContent sx={{ py: 3, px: 5 }}>
				<CloseIconButton onClick={() => handleTogglePopup(false)} />
				<Box>
					<AuthTitle>Password Change</AuthTitle>
					<AuthDevider />

					{/* sign up with email and password */}
					<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
						<StyledBox>
							<Label fontSize={18}>Current Password</Label>
							<StyedTextField
								error={errors.currentPassword ? true : false}
								{...register("currentPassword", { required: true })}
								type={values.showCurrentPassword ? "text" : "password"}
								helperText={errors.currentPassword && "Current password is required."}
								InputProps={{
									startAdornment: <FieldIcon icon={<LockFillSvg />} />,
									endAdornment: (
										<InputAdornmentElPass
											isShowing={values.showCurrentPassword}
											onClick={() =>
												handleClickShowPassword({
													key: Object.keys(values)[0],
													value: values.showCurrentPassword,
												})
											}
										/>
									),
								}}
							/>
						</StyledBox>
						<StyledBox>
							<div>
								<Label fontSize={18}>New Password</Label>
								<StyedTextField
									error={errors.newPassword ? true : false}
									{...register("newPassword", {
										required: "New Password is required",
										minLength: { value: 8, message: "Password must be at least 8 characters" },
									})}
									helperText={errors.newPassword && errors.newPassword.message}
									type={values.showNewPassword ? "text" : "password"}
									InputProps={{
										startAdornment: <FieldIcon icon={<LockFillSvg />} />,
										endAdornment: (
											<InputAdornmentElPass
												isShowing={values.showNewPassword}
												onClick={() =>
													handleClickShowPassword({
														key: Object.keys(values)[1],
														value: values.showNewPassword,
													})
												}
											/>
										),
									}}
								/>
							</div>
							{/* password label message */}
							{watch("newPassword")?.length ? (
								<Box sx={{ width: "100%", mt: 1.25 }}>
									<LinearProgress variant="determinate" value={isStrongPass ? 100 : 50} />
									<Typography textAlign="right" variant="body2" color="primary">
										{isStrongPass ? "Strong Password" : "Weak Password"}
									</Typography>
								</Box>
							) : null}
						</StyledBox>
						<StyledBox>
							<Label fontSize={18}>Re-Enter New Password</Label>
							<StyedTextField
								fullWidth
								error={errors.reEnterNewPassword ? true : false}
								{...register("reEnterNewPassword", {
									required: "Please,  re-enter password & need to match",
								})}
								helperText={errors.reEnterNewPassword && errors.reEnterNewPassword.message}
								type={values.showReEnterPassword ? "text" : "password"}
								InputProps={{
									startAdornment: <FieldIcon icon={<LockFillSvg />} />,
									endAdornment: (
										<InputAdornmentElPass
											isShowing={values.showReEnterPassword}
											onClick={() =>
												handleClickShowPassword({
													key: Object.keys(values)[2],
													value: values.showReEnterPassword,
												})
											}
										/>
									),
								}}
							/>
						</StyledBox>

						<Button type="submit" size="large" variant="contained" color="secondary" fullWidth>
							Confirm
						</Button>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default PasswordChange;
