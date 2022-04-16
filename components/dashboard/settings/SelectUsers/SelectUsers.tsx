import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { BackIconButton } from "../../../ui";
import SelectUsersTable from "./SelectUsersTable";

const SelectUsers = () => {
	const router = useRouter();

	return (
		<Box my={2.5}>
			<BackIconButton onClick={() => router.back()}>Sending Email</BackIconButton>

			<Box mt={3.75} component="section">
				<SelectUsersTable />
			</Box>
		</Box>
	);
};

export default SelectUsers;
