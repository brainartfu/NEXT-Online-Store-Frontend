import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useStyles } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "../../../utils/validations/regex";

interface Inputs {
	email: string;
}

const NewsLetter: FC = () => {
	const classes = useStyles();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Box my={9.1}>
			<Box sx={{ background: "#E8BD83", py: 7, px: 0, textAlign: "center" }}>
				<Container maxWidth="sm">
					<Typography variant="h5" sx={{ fontFamily: "Oswald", textTransform: "uppercase" }}>
						SUBSCRIBE
					</Typography>
					<Typography
						sx={{ fontFamily: "Lato", letterSpacing: "0.04em", fontSize: 12, mt: 2, mb: 2.5 }}
						variant="body2"
					>
						Sign up to get the latest on sales, new releases and more
					</Typography>
					<Box component="form" onSubmit={handleSubmit(onSubmit)}>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<TextField
								size="small"
								type="email"
								variant="filled"
								id="filled-basic"
								label="E-mail address"
								className={classes.textField}
								error={errors.email ? true : false}
								{...register("email", { required: true, pattern: regex.email })}
							/>
							<Button className={classes.button} type="submit" variant="contained" color="secondary">
								REGISTER
							</Button>
						</Box>
						{/* warning */}
						<Typography variant="body2" color="error" sx={{ textAlign: "left", mt: 0.2 }}>
							{errors.email && <span>Enter valid email address</span>}
						</Typography>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default NewsLetter;
