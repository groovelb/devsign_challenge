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
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: { xs: "90%", sm: "500px" },
          borderRadius: "24px",
          boxShadow: "none",
          border: "1px solid #dfe1e5",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google or type a URL"
          inputProps={{ "aria-label": "search google or type a URL" }}
        />
        <IconButton type="submit" sx={{ p: 1 }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <IconButton sx={{ p: 1 }} aria-label="voice search">
          <MicIcon />
        </IconButton>
      </Paper>

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          Google Search
        </Button>
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          I'm Feeling Lucky
        </Button>
      </Stack>

      {/* Language Options */}
      <Typography variant="body2" sx={{ mt: 3, color: "text.secondary" }}>
        Google offered in:
        <Button
          variant="text"
          sx={{ textTransform: "none", minWidth: "auto", mx: 1 }}
        >
          Español
        </Button>
        <Button
          variant="text"
          sx={{ textTransform: "none", minWidth: "auto", mx: 1 }}
        >
          Français
        </Button>
      </Typography>
    </Container>
  );
}

export default SearchSection; 