import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        borderTop: "1px solid #eaeaea",
        py: 1,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="caption" color="text.secondary">
        United States
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="text" size="small" sx={{ textTransform: "none" }}>
          About
        </Button>
        <Button variant="text" size="small" sx={{ textTransform: "none" }}>
          Advertising
        </Button>
        <Button variant="text" size="small" sx={{ textTransform: "none" }}>
          Business
        </Button>
        <Button variant="text" size="small" sx={{ textTransform: "none" }}>
          How Search works
        </Button>
      </Stack>
    </Box>
  );
}

export default Footer; 