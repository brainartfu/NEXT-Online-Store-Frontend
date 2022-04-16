import { FC, useState } from "react";
import {
	Box,
	Container,
	Divider,
	FormControl,
	Grid,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import ManageCookies from "../manageCookies";
import Title from "./Title";
import Link from "../../ui/Link";
import { useStyles } from "./styled";

// icons
import {
	ArabicFlagSvg,
	FacebookSvg,
	InstagramSvg,
	IpaySvg,
	LogoSvg,
	MasterCardSvg,
	PinterestSvg,
	PSvg,
	VisaSvg,
	WhatsappSvg,
} from "../../icons";
import USAFlag from "../../icons/UsaFlag";

// links
export const links = [
	{ link: "/about-us", name: "About Hoomey" },
	{ link: "/faqs", name: "FAQs" },
	{ link: "/returns", name: "Returns" },
	{ link: "/contact-us", name: "Contact us" },
	{ link: "/blogs", name: "Blogs" },
	{ link: "/privacy-policy", name: "Privacy Policy" },
	{ link: "/terms-of-service", name: "Terms of Service" },
];

const Footer: FC = () => {
	const classes = useStyles();

	const [language, setLanguage] = useState("10");

	const handleChange = (event: SelectChangeEvent) => {
		setLanguage(event.target.value as string);
	};

	return (
		<>
			<Box mt={9.1} sx={{ background: "#292929", pt: 5.5, pb: 3.5, color: "#fff" }}>
				<Container maxWidth="lg">
					<Grid container spacing={4}>
						<Grid item xs={12} md={4}>
							<LogoSvg />
							<Typography sx={{ mt: 2, fontSize: 12, fontFamily: "Lato", letterSpacing: "0.03em" }}>
								We&apos;re working to turn our passion into a booming online store. We hope you enjoy
								our products as much as we enjoy offering them to you. If you have any questions or
								comments, please don&apos;t hesitate to contact us.
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Title content="Useful Links" />
							<Box
								sx={{
									mt: 3.5,
									display: "flex",
									flexWrap: "wrap",
									gap: 2,
									"& > a": {
										fontSize: 13,
										whiteSpace: "nowrap",
										fontFamily: "Lato",
										letterSpacing: "0.01em",
									},
								}}
							>
								{links.map((link) => (
									<Link key={link.name} href={link.link}>
										{link.name}
									</Link>
								))}
							</Box>
						</Grid>
						<Grid item xs={12} md={2}>
							<Title content="Language" />
							<Box
								sx={{
									minWidth: 94,
									mt: 3.5,
								}}
							>
								<FormControl className={classes.languageSelect} size="small">
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={language}
										onChange={handleChange}
										// startAdornment={
										// 	<InputAdornment position="start">
										// 		<Image src={Flag} height={26} width={36} />
										// 	</InputAdornment>
										// }
									>
										<MenuItem className={classes.menuItem} value={10}>
											<USAFlag />
											English
										</MenuItem>
										<MenuItem className={classes.menuItem} value={20}>
											<ArabicFlagSvg />
											Arabic
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Grid>
					</Grid>
				</Container>
				<Divider sx={{ mt: 5.5, mb: 3, backgroundColor: "#DCDCDC" }} />
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Box sx={{ display: "flex", gap: 3 }}>
								<Link href="/">
									<FacebookSvg />
								</Link>
								<Link href="/">
									<PinterestSvg />
								</Link>
								<Link href="/">
									<InstagramSvg />
								</Link>
								<Link href="/">
									<WhatsappSvg />
								</Link>
							</Box>
							<Typography sx={{ mt: 1.5, fontFamily: "Oswald", letterSpacing: "0.1em", fontWeight: 300 }}>
								&copy; {new Date().getFullYear()} Hoomey.
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ display: "flex", gap: 1 }}>
								<VisaSvg />
								<MasterCardSvg />
								<IpaySvg />
								<PSvg />
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<ManageCookies />
		</>
	);
};

export default Footer;
