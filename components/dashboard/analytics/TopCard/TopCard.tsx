import { CardContent, Grid, Stack, Typography } from "@mui/material";
import { StyledCard } from "../../components/styledComponents";

interface AnalyticsDataProps {
	Visitors: {
		value: string;
		title: string;
		text1: string;
		text2: string;
	};
	Conversion: {
		value: string;
		title: string;
		text1: string;
		text2: string;
	};
	Orders: {
		value: string;
		title: string;
		text1: string;
		text2: string;
	};
	Revenue: {
		value: string;
		title: string;
		text1: string;
		text2: string;
	};
}

const TopCard = ({ analyticsData }: { analyticsData: AnalyticsDataProps }) => {
	return (
		<StyledCard sx={{ px: 3, width: "100%" }}>
			<CardContent>
				<Grid container direction="row" justifyContent="center" alignItems="center">
					<Grid item xs={12} sm={6} lg={3}>
						<Stack direction="column" alignItems="center" spacing={1}>
							<Stack sx={{ flexGrow: 1 }} spacing={1}>
								<Typography
									variant="h6"
									align="center"
									sx={{ opacity: 0.5, letterSpacing: "-0.25924px" }}
								>
									{analyticsData.Visitors.title}
								</Typography>
								<Typography variant="h4" fontWeight="bold" align="center">
									{analyticsData.Visitors.value}
								</Typography>
								<Typography
									sx={{
										color: "#8B8B8B",
										fontWeight: "400",
										fontSize: "12px",
									}}
									align="center"
								>
									{analyticsData.Visitors.text1}
								</Typography>
								<Typography
									sx={{
										color: "#8B8B8B",
										fontWeight: "400",
										fontSize: "12px",
									}}
									align="center"
								>
									{analyticsData.Visitors.text2}
								</Typography>
							</Stack>
						</Stack>
					</Grid>

					<Grid
						item
						style={{
							paddingLeft: "10px",
							borderStyle: "solid",
							borderColor: "rgba(0, 0, 0, 0.12)",
							borderWidth: "0 0 0 1px",
						}}
						xs={12}
						sm={6}
						lg={3}
					>
						<Stack direction="column" alignItems="center" spacing={1}>
							<Stack sx={{ flexGrow: 1 }} spacing={1}>
								<Typography
									variant="h6"
									align="center"
									sx={{ opacity: 0.5, letterSpacing: "-0.25924px" }}
								>
									{analyticsData.Conversion.title}
								</Typography>
								<Typography variant="h4" fontWeight="bold" align="center">
									{analyticsData.Conversion.value}
								</Typography>
								<Typography
									sx={{
										color: "#8B8B8B",
										fontWeight: "400",
										fontSize: "12px",
									}}
									align="center"
								>
									{analyticsData.Conversion.text1}
								</Typography>
								<Typography
									sx={{
										color: "#8B8B8B",
										fontWeight: "400",
										fontSize: "12px",
									}}
									align="center"
								>
									{analyticsData.Conversion.text2}
								</Typography>
							</Stack>
						</Stack>
					</Grid>

					<Grid
						item
						style={{
							paddingLeft: "10px",
							borderStyle: "solid",
							borderColor: "rgba(0, 0, 0, 0.12)",
							borderWidth: "0 0 0 1px",
						}}
						xs={12}
						sm={6}
						lg={3}
					>
						<Stack direction="column" alignItems="center" spacing={1}>
							<Stack sx={{ flexGrow: 1 }} spacing={1}>
								<Typography
									variant="h6"
									align="center"
									sx={{ opacity: 0.5, letterSpacing: "-0.25924px" }}
								>
									{analyticsData.Orders.title}
								</Typography>
								<Typography variant="h4" fontWeight="bold" align="center">
									{analyticsData.Orders.value}
								</Typography>
								<Typography
									sx={{
										color: "#8B8B8B",
										fontWeight: "400",
										fontSize: "12px",
									}}
									align="center"
								>
									{analyticsData.Orders.text1}
								</Typography>
								<Typography
									sx={{
										color: "#8B8B8B",
										fontWeight: "400",
										fontSize: "12px",
									}}
									align="center"
								>
									{analyticsData.Orders.text2}
								</Typography>
							</Stack>
						</Stack>
					</Grid>

					<Grid
						item
						style={{
							paddingLeft: "10px",
							borderStyle: "solid",
							borderColor: "rgba(0, 0, 0, 0.12)",
							borderWidth: "0 0 0 1px",
						}}
						xs={12}
						sm={6}
						lg={3}
					>
						<Stack direction="column" alignItems="center" spacing={1}>
							<Stack sx={{ flexGrow: 1 }} spacing={1}>
								<Typography
									variant="h6"
									align="center"
									sx={{ opacity: 0.5, letterSpacing: "-0.25924px" }}
								>
									{analyticsData.Revenue.title}
								</Typography>
								<Typography variant="h4" fontWeight="bold" align="center">
									{analyticsData.Revenue.value}
								</Typography>
								<Typography
									sx={{
										color: "#8B8B8B",
										fontWeight: "400",
										fontSize: "12px",
									}}
									align="center"
								>
									{analyticsData.Revenue.text1}
								</Typography>
								<Typography
									sx={{
										color: "#8B8B8B",
										fontWeight: "400",
										fontSize: "12px",
									}}
									align="center"
								>
									{analyticsData.Revenue.text2}
								</Typography>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</CardContent>
		</StyledCard>
	);
};

export default TopCard;
