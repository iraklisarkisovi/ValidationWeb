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
import { MaterialUISwitch } from "./ThemeSwitcher";
import { RootState } from "../ReduxMainToolkit/ReduxMainStore";
import { useDispatch, useSelector } from "react-redux";
import { ThemeChange } from "../ReduxMainToolkit/ReduxMainSlice";

const AppHeader = () => {
  const theme = useSelector((state: RootState) => state.mainStore.ThemeChanger);
  const dispatch = useDispatch();
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

  const handleThemeChange = () => {
    dispatch(ThemeChange());
  };

  if (!user) {
    navigate("/");
    return null;
  }

  const filteredUserData = data?.find((item: any) => item.email === user.email);

  if (!filteredUserData) {
    navigate("/error");  
    return null;
  }

  const { profileImage, email, lastname, role, firstname } =
    filteredUserData;

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme ? "#475569" : "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Avatar
            alt="Profile"
            src={profileImage}
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
              <strong>Email: </strong> {email}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <strong>Name: </strong> {firstname}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <strong>Last Name: </strong> {lastname}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <strong>Role: </strong> {role}
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <h1 className={`${theme ? "text-white" : "text-black"}`}>
              {firstname}
            </h1>
          </Typography>
          <div className="mr-20">
            <MaterialUISwitch onChange={handleThemeChange} />
          </div>
          <Button color="inherit" onClick={logout}>
            <h1 className={`${theme ? "text-white" : "text-black"}`}>Logout</h1>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
