import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { BackIconButton } from "../../../ui";
import ReportCard from "./ReportCard";

const reportData = {
	Acqisition: {
		title: "Acquisition",
		text: "Increase visitor engagement by knowing where your visitors are coming from and measuring the success of your campaigns.",
		subText: "Sessions last 30 days",
		subValue: "4013",
		link1: "Sessions over time",
		link2: "Sessions by referrer",
		link3: "Sessions by location",
	},
	Behavior: {
		title: "Behaviour",
		text: "Increase visitor engagement by knowing where your visitors are coming from and measuring the success of your campaigns.",
		subText: "Sessions last 30 days",
		subValue: "4013",
		link1: "Sessions over time",
		link2: "Sessions by referrer",
		link3: "Sessions by location",
	},
	Finances: {
		title: "Finances",
		text: "Increase visitor engagement by knowing where your visitors are coming from and measuring the success of your campaigns.",
		subText: "Sessions last 30 days",
		subValue: "4013",
		link1: "Sessions over time",
		link2: "Sessions by referrer",
		link3: "Sessions by location",
	},
	Marketing: {
		title: "Marketing",
		text: "Increase visitor engagement by knowing where your visitors are coming from and measuring the success of your campaigns.",
		subText: "Sessions last 30 days",
		subValue: "4013",
		link1: "Sessions over time",
		link2: "Sessions by referrer",
		link3: "Sessions by location",
	},
};

const Reportings = () => {
	const router = useRouter();
	return (
		<div>
			<Box mt={3}>
				<BackIconButton onClick={() => router.back()}>Reportings</BackIconButton>
			</Box>
			<Box my={3.8}>
				{/* Reporting Cards*/}
				<Box my={3.5} component="section">
					<Grid container spacing={2.5}>
						{/* Aqisition */}
						<Grid item xs={12} md={6} lg={6}>
							<ReportCard reportCardData={reportData.Acqisition} />
						</Grid>

						{/* Behavior */}
						<Grid item xs={12} md={6} lg={6}>
							<ReportCard reportCardData={reportData.Behavior} />
						</Grid>

						{/* Finances*/}
						<Grid item xs={12} md={6} lg={6}>
							<ReportCard reportCardData={reportData.Finances} />
						</Grid>

						{/* Marketing */}
						<Grid item xs={12} md={6} lg={6}>
							<ReportCard reportCardData={reportData.Marketing} />
						</Grid>
					</Grid>
				</Box>
			</Box>
		</div>
	);
};

export default Reportings;
