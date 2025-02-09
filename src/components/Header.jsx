import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";

function Header() {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Gmail
        </Button>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Images
        </Button>
        <IconButton color="inherit" aria-label="apps">
          <AppsIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="profile">
          <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header; 