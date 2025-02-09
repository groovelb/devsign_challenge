import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
	return (
		<Box
			sx={{
				position: "absolute",
				bottom: 0,
				width: "100%",
				bgcolor: "background.default",
				p: 2,
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<Typography variant="body2">대한민국</Typography>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Link href="#" color="inherit" underline="none">
					광고
				</Link>
				<Link href="#" color="inherit" underline="none">
					비즈니스
				</Link>
				<Link href="#" color="inherit" underline="none">
					검색의 원리
				</Link>
			</Box>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Link href="#" color="inherit" underline="none">
					개인정보처리방침
				</Link>
				<Link href="#" color="inherit" underline="none">
					약관
				</Link>
				<Link href="#" color="inherit" underline="none">
					설정
				</Link>
			</Box>
		</Box>
	);
}

export default Footer;
