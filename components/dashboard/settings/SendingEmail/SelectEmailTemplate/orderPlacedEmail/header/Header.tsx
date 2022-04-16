import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Stack, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { AppIconSvg, FacebookSvg, InstagramSvg, PinterestSvg, WhatsappSvg } from "../../../../../../icons";

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="secondary">
				<Toolbar sx={{ minHeight: "45px !important" }}>
					<Box sx={{ mr: 1, flexGrow: 1 }}>
						<Stack direction="row" spacing={0.5}>
							<AppIconSvg sx={{ fontSize: 18 }} />
							<Typography color="primary.main" fontSize={12} fontWeight="medium">
								HOOMEY
							</Typography>
						</Stack>
					</Box>

					<Stack direction="row" spacing={0.5}>
						<MuiLink href="/" target="_blank">
							<IconButton>
								<FacebookSvg sx={{ fontSize: 14 }} />
							</IconButton>
						</MuiLink>
						<MuiLink href="/" target="_blank">
							<IconButton>
								<PinterestSvg sx={{ fontSize: 14 }} />
							</IconButton>
						</MuiLink>
						<MuiLink href="/" target="_blank">
							<IconButton>
								<InstagramSvg sx={{ fontSize: 14 }} />
							</IconButton>
						</MuiLink>
						<MuiLink href="/" target="_blank">
							<IconButton>
								<WhatsappSvg sx={{ fontSize: 14 }} />
							</IconButton>
						</MuiLink>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
