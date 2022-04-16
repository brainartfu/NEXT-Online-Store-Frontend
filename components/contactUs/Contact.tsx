import { Box, Container, Typography, TextField as MuiTextField, Paper, Button, Grid } from "@mui/material";
import Image from "next/image";
import { IMAGES } from "../../uiElements";
import { styled } from "@mui/system";
import { COLORS } from "../../theme/colors";
import { useGlobalJSStyles } from "../../styles/styled";

// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "../../utils/validations/regex";

export const Label = styled(Typography)({
	marginBottom: "13px",
	color: COLORS.GRANITE_GREY,
	fontWeight: 400,
});

const TextField = styled(MuiTextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: "0 !important",
		fontSize: "16px !important",
		color: "#656565 !important",
	},
});

interface Inputs {
	fullName: string;
	email: string;
	password: string;
	message: string;
}

const Contact = () => {
	const classes = useGlobalJSStyles();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	// handle form
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Box mb={9.1}>
			<Container>
				{/* banner */}
				<Box sx={{ height: 343, position: "relative" }}>
					<Box className={classes.darkBanner}>
						<Image
							src={IMAGES.ContactBanner}
							alt="banner-hero"
							layout="fill"
							objectFit="cover"
							placeholder="blur"
						/>
					</Box>
					<Box className={classes.darkBannerContent}>
						<Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
							Contact Us
						</Typography>
						<Typography variant="h6" sx={{ fontWeight: "medium" }}>
							Please provide your feedback regarding how we can improve our business.
						</Typography>
					</Box>
				</Box>
				{/* form */}
				<Container maxWidth="md">
					<Paper sx={{ p: { xs: 2, md: 5 }, transform: "translateY(-60px)" }}>
						<Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
							<Box component="div" sx={{ my: 2.5 }}>
								<Label variant="h6">Full Name</Label>
								<TextField
									fullWidth
									error={errors.fullName ? true : false}
									{...register("fullName", { required: true })}
									helperText={errors.fullName && "Enter your full name."}
								/>
							</Box>
							<Box component="div" sx={{ my: 2.5 }}>
								<Label variant="h6">Email address</Label>
								<TextField
									fullWidth
									type="email"
									error={errors.email ? true : false}
									{...register("email", { required: true, pattern: regex.email })}
									helperText={errors.email && "Enter your valid email address."}
								/>
							</Box>
							<Box component="div" sx={{ my: 2.5 }}>
								<Label variant="h6">Password</Label>
								<TextField
									fullWidth
									type="password"
									error={errors.password ? true : false}
									{...register("password", { required: true })}
									helperText={errors.password && "Password field is required."}
								/>
							</Box>
							<Box component="div" sx={{ my: 2.5 }}>
								<Label variant="h6">Your Message</Label>
								<TextField
									rows={5}
									fullWidth
									multiline
									error={errors.message ? true : false}
									{...register("message", { required: true })}
									helperText={errors.message && "Message field is required."}
								/>
							</Box>
							<Box component="div" sx={{ my: 2.5 }}>
								<Button color="secondary" type="submit" variant="contained" fullWidth>
									Send
								</Button>
							</Box>
						</Box>
					</Paper>

					<Box mt={-2.5}>
						<Grid container spacing={5}>
							<Grid item xs={12} md={6}>
								<Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
									Contact
								</Typography>
								<Typography color="primary" variant="h6" sx={{ fontWeight: 400 }}>
									Loremipsum@abc.com
								</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
									Based in
								</Typography>
								<Typography color="primary" variant="h6" sx={{ fontWeight: 400 }}>
									Los Angeles, California
								</Typography>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Container>
		</Box>
	);
};

export default Contact;
