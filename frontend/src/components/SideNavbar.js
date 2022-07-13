import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";
import NarrowDrawer from "./NarrowDrawer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BroadDrawer from "./BroadDrawer";
import { Grid } from "@mui/material";

const drawerWidth = 240;
const narrowDrawerWidth = 60;

function ResponsiveDrawer(props) {
  let navigate = useNavigate();

  const { windows } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { children } = props;
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(true);

  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const narrowDrawer = <NarrowDrawer />;

  const drawer = <BroadDrawer />;

  const container =
    windows !== undefined ? () => windows().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={
          openDrawer
            ? { width: { sm: narrowDrawerWidth }, flexShrink: { sm: 2 } }
            : { width: { sm: drawerWidth }, flexShrink: { sm: 2 } }
        }
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: 2 },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {openDrawer ? (
          <Drawer
            variant="permanent"
            className="borderSidebar"
            sx={{
              display: { xs: 2, sm: 2 },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: narrowDrawerWidth,
              },
            }}
            open
          >
            <Grid
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20%",
                cursor: "pointer",
              }}
            >
              <ChevronRightIcon sx={{ color: "#09c1d7" }} />
            </Grid>
            {narrowDrawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            className="borderSidebar"
            sx={{
              display: { xs: 1, sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: { xs: "240px", sm: { drawerWidth } },
              },
            }}
            open
          >
            <Grid
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "0%",
                cursor: "pointer",
              }}
            >
              <ChevronLeftIcon sx={{ color: "#09c1d7", padding: "5%" }} />
              {/* <p ></p> */}
            </Grid>
            {drawer}
          </Drawer>
        )}
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflowX: "hidden",
          margin: "0",
          padding: "0",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  windows: PropTypes.func,
};

export default ResponsiveDrawer;
