import { Box, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ROUTING_TREE } from "../../../../constants/siteUrls";
import { RoundButton } from "../../../styledComponents";
import { BackIconButton } from "../../../ui";
import SelectEmailTemplate from "./SelectEmailTemplate";
import WriteYourself from "./WriteYourself";

const SendingEmail = () => {
	const router = useRouter();

	const [value, setValue] = useState("email_template");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => router.back()}>Sending Email</BackIconButton>

			{/* others sections */}
			<Box mt={3.75} component="section">
				<FormControl>
					<RadioGroup name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
						<FormControlLabel value="email_template" control={<Radio />} label="Select Email templates" />
						<FormControlLabel value="write_yourself" control={<Radio />} label="Write yourself" />
					</RadioGroup>
				</FormControl>
			</Box>

			{/* switch email process system */}
			{value === "email_template" && <SelectEmailTemplate />}
			{value === "write_yourself" && <WriteYourself />}

			{/* next button */}
			<Box sx={{ mt: 6, textAlign: "center" }}>
				<RoundButton
					onClick={() =>
						router.push(
							`${ROUTING_TREE.DASHBOARD.SETTINGS.EMAIL.ROOT}/${ROUTING_TREE.DASHBOARD.SETTINGS.EMAIL.SEND}`,
						)
					}
					sx={{ minWidth: 300 }}
					variant="contained"
					color="secondary"
				>
					Next
				</RoundButton>
			</Box>
		</Box>
	);
};

export default SendingEmail;
