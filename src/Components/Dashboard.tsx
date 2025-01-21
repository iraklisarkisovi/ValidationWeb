import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useQuery } from "@tanstack/react-query";
import { DBGetUsers } from "../QueryMain/QueryMainRest";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryFn: DBGetUsers,
    queryKey: ["data"],
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (!user) {
    navigate("/");
    return null;
  }

  const filteredUserData = data?.filter(
    (item: any) => item.email === user.email
  )[0];

  if (!filteredUserData) {
    return <div>User not found</div>;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Avatar
            alt="Profile"
            src={filteredUserData.profileImage}
            sx={{ marginRight: 2, cursor: "pointer" }}
            onClick={handleAvatarClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <strong>Email:</strong> {filteredUserData.email}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <strong>Name:</strong> {filteredUserData.fullname}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <strong>lastname:</strong> {filteredUserData.lastname}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <strong>pid:</strong> {filteredUserData.pid}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <strong>Role:</strong> {filteredUserData.role}
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Welcome, {filteredUserData.fullname}
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Dashboard;
