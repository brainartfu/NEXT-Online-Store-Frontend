import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Stack } from "@mui/material";
import { Link } from "../../../../ui";
import { Link as MuiLink } from "@mui/material";
import { FacebookSvg, InstagramSvg, LogoSvg, PinterestSvg, WhatsappSvg } from "../../../../icons";

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<Box sx={{ mr: 2, flexGrow: 1 }}>
						<Link href="/">
							<LogoSvg />
						</Link>
					</Box>

					<Stack direction="row" spacing={2}>
						<MuiLink href="/" target="_blank">
							<IconButton>
								<FacebookSvg />
							</IconButton>
						</MuiLink>
						<MuiLink href="/" target="_blank">
							<IconButton>
								<PinterestSvg />
							</IconButton>
						</MuiLink>
						<MuiLink href="/" target="_blank">
							<IconButton>
								<InstagramSvg />
							</IconButton>
						</MuiLink>
						<MuiLink href="/" target="_blank">
							<IconButton>
								<WhatsappSvg />
							</IconButton>
						</MuiLink>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
