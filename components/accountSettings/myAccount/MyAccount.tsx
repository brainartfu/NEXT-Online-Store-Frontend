import {
	Box,
	Grid,
	Button,
	Select,
	MenuItem,
	TextField,
	InputLabel,
	FormControl,
	SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { AccountSettingsSvg } from "../../icons";
import { days, months, years } from "../../../utils/select";
import { Label, SettingsDivider, TitleFlexStack, TitleText } from "../styledComponents";

// react-hook-form
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "../../../utils/validations/regex";
import FormHelperText from "@mui/material/FormHelperText";

interface Inputs {
	firstName: string;
	lastName: string;
	email: string;
	dateOfBirth: {
		day: string;
		month: string;
		year: string;
	};
}

interface SelectState {
	day: string;
	month: string;
	year: string;
}

const MyAccount = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	// select input / case of typescript issue
	const [selectValues, setSelectValues] = useState<SelectState>({
		day: "",
		month: "",
		year: "",
	});

	const handleSelectChange = (prop: keyof SelectState) => (event: SelectChangeEvent) => {
		setSelectValues({ ...selectValues, [prop]: event.target.value });
	};

	// handle form
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<Box>
			<TitleFlexStack>
				<AccountSettingsSvg />
				<TitleText>Account Settings</TitleText>
			</TitleFlexStack>
			<SettingsDivider />
			<Box
				onSubmit={handleSubmit(onSubmit)}
				component="form"
				sx={{
					"& .MuiTextField-root": { bgcolor: "#fff" },
				}}
			>
				{/* first & last name */}
				<Box component="div" my={2.5}>
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={6}>
							<Box>
								<Label>First Name</Label>
								<TextField
									fullWidth
									defaultValue="Robert"
									error={errors.firstName ? true : false}
									helperText={errors.firstName && "First name is required."}
									{...register("firstName", { required: true })}
								/>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box>
								<Label>Last Name</Label>
								<TextField
									fullWidth
									defaultValue="Bruce"
									error={errors.lastName ? true : false}
									helperText={errors.lastName && "Last name is required."}
									{...register("lastName", { required: true })}
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>

				{/* email address */}
				<Box my={2.5}>
					<Label>Email Address</Label>
					<TextField
						fullWidth
						type="email"
						placeholder="example@gmail.com"
						error={errors.email ? true : false}
						helperText={errors.email && "Email is required."}
						{...register("email", { required: true, pattern: regex.email })}
					/>
				</Box>

				{/* Date of Birth */}
				<Label>Date of Birth</Label>
				<Grid container spacing={2.5}>
					{/* day */}
					<Grid item xs={12} md={3}>
						<FormControl fullWidth error={errors.dateOfBirth?.day ? true : false}>
							<InputLabel id="day-select-label">Day</InputLabel>
							<Select
								{...register("dateOfBirth.day", { required: true })}
								id="day-select"
								labelId="day-select-label"
								value={selectValues.day}
								label="Day"
								onChange={handleSelectChange("day")}
							>
								{days.map((day) => (
									<MenuItem key={day} value={day}>
										{day}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>{errors.dateOfBirth?.day && "Day field is required."}</FormHelperText>
						</FormControl>
					</Grid>
					{/* month */}
					<Grid item xs={12} md={6}>
						<FormControl fullWidth error={errors.dateOfBirth?.month ? true : false}>
							<InputLabel id="month-select-label">Month</InputLabel>
							<Select
								{...register("dateOfBirth.month", { required: true })}
								defaultValue=""
								labelId="month-select-label"
								id="month-select"
								value={selectValues.month}
								label="Month"
								onChange={handleSelectChange("month")}
							>
								{months.map((month) => (
									<MenuItem key={month} value={month}>
										{month}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>{errors.dateOfBirth?.month && "Month field is required."}</FormHelperText>
						</FormControl>
					</Grid>
					{/* year */}
					<Grid item xs={12} md={3}>
						<FormControl fullWidth error={errors.dateOfBirth?.year ? true : false}>
							<InputLabel id="year-select-label">Year</InputLabel>
							<Select
								{...register("dateOfBirth.year", { required: true })}
								defaultValue=""
								labelId="year-select-label"
								id="year-select"
								value={selectValues.year}
								label="Year"
								onChange={handleSelectChange("year")}
							>
								{years.map((year) => (
									<MenuItem key={year} value={year}>
										{year}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>{errors.dateOfBirth?.year && "Year field is required."}</FormHelperText>
						</FormControl>
					</Grid>
				</Grid>

				{/* cancel & save change button */}
				<Box mt={6}>
					<Grid container spacing={2.5}>
						<Grid item xs={12} md={6}>
							<Button size="large" color="secondary" variant="contained" fullWidth>
								Cancel
							</Button>
						</Grid>
						<Grid item xs={12} md={6}>
							<Button size="large" type="submit" color="secondary" variant="outlined" fullWidth>
								Save Changes
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default MyAccount;
