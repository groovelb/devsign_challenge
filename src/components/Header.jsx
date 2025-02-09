import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";

function Header() {
	return (
		<AppBar
			position="static"
			color="transparent"
			elevation={0}
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				p: 2,
			}}
		>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Link href="#" color="inherit" underline="none">
					Google 정보
				</Link>
				<Link href="#" color="inherit" underline="none">
					스토어
				</Link>
			</Box>
			<Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
				<Link href="#" color="inherit" underline="none">
					Gmail
				</Link>
				<Link href="#" color="inherit" underline="none">
					이미지
				</Link>
				<IconButton>
					<AppsIcon />
				</IconButton>
				<Avatar alt="User Profile" src="/static/images/avatar.png" />
			</Box>
		</AppBar>
	);
}

export default Header;
