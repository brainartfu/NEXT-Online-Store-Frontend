import { Box, Button, TextField, LinearProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Label, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";
import { ChangePassSvg } from "../../icons";
import { InputAdornmentElPass } from "../../ui";

// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
import { isStrongPassword } from "../../../utils/validations";

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

const ChangePassword = () => {
	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [isStrongPass, setIsStrongPass] = useState(false);
	const [values, setValues] = useState<State>({
		showCurrentPassword: false,
		showNewPassword: false,
		showReEnterPassword: false,
	});

	// password visibility handler
	const handleClickShowPassword = (props: { key: string; value: boolean }) => {
		setValues({ ...values, [props.key]: !props.value });
	};

	// handle form submit
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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

	return (
		<Box>
			<TitleFlexStack>
				<ChangePassSvg />
				<TitleText>Change Password</TitleText>
			</TitleFlexStack>
			<SettingsDivider />
			<Box
				component="form"
				autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}
				sx={{
					"& .MuiTextField-root": { bgcolor: "#fff" },
				}}
			>
				{/* current password */}
				<Box my={2.5}>
					<Label>Current Password</Label>
					<TextField
						fullWidth
						error={errors.currentPassword ? true : false}
						{...register("currentPassword", { required: true })}
						type={values.showCurrentPassword ? "text" : "password"}
						helperText={errors.currentPassword && "Current password is required."}
						InputProps={{
							endAdornment: (
								<InputAdornmentElPass
									isShowing={values.showCurrentPassword}
									onClick={() =>
										handleClickShowPassword({
											key: "showCurrentPassword",
											value: values.showCurrentPassword,
										})
									}
								/>
							),
						}}
					/>
				</Box>

				{/* new password */}
				<Box my={2.5}>
					<Label>New Password</Label>
					<TextField
						fullWidth
						error={errors.newPassword ? true : false}
						{...register("newPassword", {
							required: "New Password is required",
							minLength: { value: 8, message: "Password must be at least 8 characters" },
						})}
						type={values.showNewPassword ? "text" : "password"}
						helperText={errors.newPassword && errors.newPassword.message}
						InputProps={{
							endAdornment: (
								<InputAdornmentElPass
									isShowing={values.showNewPassword}
									onClick={() =>
										handleClickShowPassword({
											key: "showNewPassword",
											value: values.showNewPassword,
										})
									}
								/>
							),
						}}
					/>
					{/* password label message */}
					{watch("newPassword")?.length ? (
						<Box sx={{ width: "100%", mt: 1.25 }}>
							<LinearProgress variant="determinate" value={isStrongPass ? 100 : 50} />
							<Typography textAlign="right" variant="body2" color="primary">
								{isStrongPass ? "Strong Password" : "Weak Password"}
							</Typography>
						</Box>
					) : null}
				</Box>

				{/* Re-Enter New Password */}
				<Box my={2.5}>
					<Label>Re-Enter New Password</Label>
					<TextField
						fullWidth
						error={errors.reEnterNewPassword ? true : false}
						{...register("reEnterNewPassword", { required: true })}
						type={values.showReEnterPassword ? "text" : "password"}
						helperText={errors.reEnterNewPassword && "Please, re-enter password & need to match"}
						InputProps={{
							endAdornment: (
								<InputAdornmentElPass
									isShowing={values.showReEnterPassword}
									onClick={() =>
										handleClickShowPassword({
											key: "showReEnterPassword",
											value: values.showReEnterPassword,
										})
									}
								/>
							),
						}}
					/>
				</Box>

				{/* cancel & save change button */}
				<Box mt={6}>
					<Button type="submit" size="large" color="secondary" variant="contained" fullWidth>
						Confirm
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default ChangePassword;
