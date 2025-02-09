import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import ImageIcon from "@mui/icons-material/Image";

const SearchBar = () => (
	<Paper
		sx={{
			display: "flex",
			alignItems: "center",
			width: 600,
			p: 1.5,
			borderRadius: 10,
			boxShadow: "0px 1px 6px rgba(32,33,36,0.28)",
		}}
	>
		<IconButton>
			<SearchIcon />
		</IconButton>
		<TextField
			variant="standard"
			fullWidth
			placeholder="Google 검색 또는 URL 입력"
			InputProps={{ disableUnderline: true }}
		/>
		<IconButton>
			<MicIcon />
		</IconButton>
		<IconButton>
			<ImageIcon />
		</IconButton>
	</Paper>
);

const SearchButtons = () => (
	<Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
		<Grid item>
			<Button
				variant="contained"
				sx={{
					textTransform: "none",
					bgcolor: "grey.200",
					color: "text.primary",
					":hover": { bgcolor: "grey.300" },
				}}
			>
				Google 검색
			</Button>
		</Grid>
		<Grid item>
			<Button
				variant="contained"
				sx={{
					textTransform: "none",
					bgcolor: "grey.200",
					color: "text.primary",
					":hover": { bgcolor: "grey.300" },
				}}
			>
				I'm Feeling Lucky
			</Button>
		</Grid>
	</Grid>
);

function SearchSection() {
	return (
		<Container
			maxWidth="xl"
			disableGutters
			sx={{
				height: "calc(100vh - 64px)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#fff",
			}}
		>
			{/* Google Logo */}
			<Box
				component="img"
				src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
				alt="Google Logo"
				sx={{
					mb: 4,
					width: { xs: "240px", sm: "272px" },
					height: "92px",
				}}
			/>

			{/* Search Field */}
			<SearchBar />
			<SearchButtons />
		</Container>
	);
}

export default SearchSection;
