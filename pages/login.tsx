import { NextLayoutComponentType } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { IMAGES } from "../uiElements";
import { styled } from "@mui/material/styles";
import { EmailFilledSvg, LockFilledSvg, LogoSvg } from "../components/icons";
import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControlLabel,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	TextField,
	Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "../components/ui";
import AuthLayout from "../Layout/AuthLayout";

// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "../utils/validations/regex";

const StyledTextField = styled(TextField)({
	"& .MuiInput-underline:after": {
		borderBottomColor: "#fff",
	},
	"& .MuiOutlinedInput-root": {
		paddingLeft: 5,
		"& fieldset": {
			borderColor: "#FFFFFF",
		},
		"&:hover fieldset": {
			borderColor: "#c4c4c4",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#fff",
		},
	},
	"& .MuiOutlinedInput-input": {
		paddingLef: 5,
		color: "#fff",
		background: "#292929 !important",
	},
});

const styles = {
	fontSize: 72,
	position: "absolute",
	zIndex: 1,
	left: -55,
	top: "-5px",
};

interface Inputs {
	email: string;
	password: string;
}
interface State {
	amount: string;
	password: string;
	weight: string;
	weightRange: string;
	showPassword: boolean;
}

const Login: NextLayoutComponentType = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const [isChecked, setIsChecked] = useState(true);
	const [values, setValues] = useState<State>({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});
	// const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setValues({ ...values, [prop]: event.target.value });
	// };

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(event.target.checked);
	};

	// handle form submit
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container maxWidth={false}>
				<Box sx={{ height: "100vh" }}>
					<Grid container sx={{ height: "100%" }}>
						<Grid item xs={12} md={5}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									height: "100%",
								}}
							>
								<Box sx={{ my: 8, textAlign: "center" }} component="div">
									<Link href="/">
										<LogoSvg />
									</Link>
								</Box>
								<Image src={IMAGES.CampaignImg} alt="campaign" layout="responsive" placeholder="blur" />
							</Box>
						</Grid>
						<Grid item xs={12} md={7}>
							<Box
								sx={{
									p: { xs: 3, sm: 8 },
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									height: "100%",
									color: "#FFFFFF",
									background: "#292929",
								}}
							>
								<Typography fontFamily="Poppins" variant="h4" fontWeight="bold" textAlign="center">
									Sign In to your account
								</Typography>
								<div>
									<Divider sx={{ my: 3, borderColor: "#C4C4C4" }} />
								</div>
								<Typography fontFamily="Poppins" variant="h6" fontWeight="medium">
									Please fill in your login details below
								</Typography>

								<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
									{/* email field */}
									<Box my={3.8}>
										<InputLabel sx={{ mb: 2.5, color: "common.white" }}>Email address</InputLabel>
										<Box
											sx={{
												ml: 6,
												position: "relative",
												display: "flex",
												alignItems: "center",
											}}
										>
											<EmailFilledSvg sx={{ ...styles }} />
											<StyledTextField
												fullWidth
												{...register("email", { required: true, pattern: regex.email })}
												helperText={errors.email && "Enter your valid email address."}
											/>
										</Box>
									</Box>

									{/* password field */}
									<Box my={3.8}>
										<InputLabel
											htmlFor="outlined-adornment-password"
											sx={{ mb: 2.5, color: "common.white" }}
										>
											Email address
										</InputLabel>
										<Box
											sx={{ ml: 6, position: "relative", display: "flex", alignItems: "center" }}
										>
											<LockFilledSvg sx={{ ...styles }} />
											<StyledTextField
												fullWidth
												{...register("password", { required: true })}
												helperText={errors.password && "Enter your password"}
												id="outlined-adornment-password"
												type={values.showPassword ? "text" : "password"}
												InputProps={{
													endAdornment: (
														<InputAdornment position="end">
															<IconButton
																aria-label="toggle password visibility"
																onClick={handleClickShowPassword}
																onMouseDown={handleMouseDownPassword}
																edge="end"
															>
																{values.showPassword ? (
																	<VisibilityOff color="primary" />
																) : (
																	<Visibility color="primary" />
																)}
															</IconButton>
														</InputAdornment>
													),
												}}
											/>
										</Box>
									</Box>

									{/* checkbox */}
									<FormControlLabel
										sx={{ mb: 3.8 }}
										control={
											<Checkbox
												checked={isChecked}
												onChange={handleCheckbox}
												inputProps={{ "aria-label": "controlled" }}
											/>
										}
										label="Stay Signed In"
									/>

									{/* submit button */}
									<Button
										sx={{
											height: 73,
											borderRadius: 1.25,
											background: "#FFFFFF",
											fontSize: { xs: 16, sm: 24 },
											"&:hover": { background: "#c4c4c4" },
											boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
										}}
										variant="contained"
										fullWidth
										size="large"
										type="submit"
									>
										Sign In
									</Button>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

Login.PageLayout = AuthLayout;
export default Login;
