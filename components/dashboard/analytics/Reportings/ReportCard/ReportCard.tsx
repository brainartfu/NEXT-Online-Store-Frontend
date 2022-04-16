import { CardContent, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { StyledCard } from "../../../components/styledComponents";

interface ReportCardDataProps {
	title: string;
	text: string;
	subText: string;
	subValue: string;
	link1: string;
	link2: string;
	link3: string;
}

const ReportCard = ({ reportCardData }: { reportCardData: ReportCardDataProps }) => {
	return (
		<StyledCard sx={{ px: 1, width: "100%" }}>
			<CardContent>
				<Stack direction="column" alignItems="start" spacing={1}>
					<Stack spacing={1} alignItems="stretch">
						<Typography variant="h6">{reportCardData.title}</Typography>
						<Typography
							sx={{
								color: "#8B8B8B",
								fontWeight: "400",
								fontSize: "14px",
							}}
						>
							{reportCardData.text}
						</Typography>
						<Typography
							sx={{
								fontWeight: "600",
								fontSize: "14px",
							}}
						>
							{reportCardData.subText}
						</Typography>
						<Typography variant="h5" fontWeight="bold">
							{reportCardData.subValue}
						</Typography>
						<Divider variant="middle" />

						<Typography
							sx={{
								fontWeight: "600",
								fontSize: "14px",
							}}
						>
							Reports
						</Typography>
						<Typography sx={{ color: "#E2BC82", fontWeight: "600", fontSize: "14px" }}>
							{reportCardData.link1}
						</Typography>
						<Typography sx={{ color: "#E2BC82", fontWeight: "600", fontSize: "14px" }}>
							{reportCardData.link2}
						</Typography>
						<Typography sx={{ color: "#E2BC82", fontWeight: "600", fontSize: "14px" }}>
							{reportCardData.link3}
						</Typography>
					</Stack>
				</Stack>
			</CardContent>
		</StyledCard>
	);
};

export default ReportCard;
