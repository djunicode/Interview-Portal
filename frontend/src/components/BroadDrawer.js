import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import QuizIcon from "@mui/icons-material/Quiz";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TaskIcon from "@mui/icons-material/Task";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
function BroadDrawer() {
  const navigate = useNavigate();

  return (
    <>
      <Box className="logoBox"></Box>
      <Divider />
      <List>
        <ListItem button onClick={() => navigate("/dashboard")}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "#8985f2" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => navigate("/profile")}>
          <ListItemIcon>
            <PersonIcon sx={{ color: "#8985f2" }} />
          </ListItemIcon>
          <ListItemText
            sx={{ color: "#000", textDecoration: "none!important" }}
            primary="Profile"
          />
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => navigate("/faq")}>
          <ListItemIcon>
            <QuizIcon sx={{ color: "#8985f2" }} />
          </ListItemIcon>
          <ListItemText primary="FAQs" />
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => navigate("/ApplicationForm")}>
          <ListItemIcon>
            <AssignmentIcon sx={{ color: "#8985f2" }} />
          </ListItemIcon>
          <ListItemText primary="Application Form" />
        </ListItem>
      </List>
      <List>
        <ListItem button onClick={() => navigate("/resources")}>
          <ListItemIcon>
            <TaskIcon sx={{ color: "#8985f2" }} />
          </ListItemIcon>
          <ListItemText primary="Resources" />
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
            <LogoutIcon sx={{ color: "#8985f2" }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      <Divider />
    </>
  );
}

export default BroadDrawer;
