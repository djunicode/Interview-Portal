import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useNavigate } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import QuizIcon from "@mui/icons-material/Quiz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskIcon from "@mui/icons-material/Task";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

function NarrowDrawer() {
  const navigate = useNavigate();
  return (
    <div style={{ overflowX: "hidden" }}>
      <Box className="logoBox">
        {/* <img width={100} src={} className="logo" /> */}
      </Box>
      <Divider />
      <List>
        <ListItem button onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "#09c1d7" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => navigate("/profile")}>
          <ListItemIcon>
            <PersonIcon sx={{ color: "#09c1d7" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => navigate("/faq")}>
          <ListItemIcon>
            <QuizIcon sx={{ color: "#09c1d7" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => navigate("/ApplicationForm")}>
          <ListItemIcon>
            <AssignmentIcon sx={{ color: "#09c1d7" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => navigate("/resources")}>
          <ListItemIcon>
            <TaskIcon sx={{ color: "#09c1d7" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          <ListItemIcon>
            <LogoutIcon sx={{ color: "#09c1d7" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}

export default NarrowDrawer;
