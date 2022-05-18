import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useNavigate } from "react-router";
import PersonIcon from '@mui/icons-material/Person';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';

function BroadDrawer() {
    const navigate = useNavigate()

    return (
        <>
            <Box className="logoBox" >
            </Box>
            <Divider />
            <List>
                <ListItem button onClick={() => navigate('/profile')}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText
                        sx={{ color: '#000', textDecoration: 'none!important' }}
                        primary="Profile"
                    />
                </ListItem>
            </List>
            <List>
                <ListItem button onClick={() => navigate('/faqs')} >
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="FAQs" />
                </ListItem>
            </List>
            <List>
                <ListItem button onClick={() => navigate('/details')} >
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Application Form" />
                </ListItem>
            </List>
            <List>
                <ListItem button onClick={() => navigate('/resources')} >
                    <ListItemIcon>
                        <TaskIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resources" />
                </ListItem>
            </List>
            <Divider />
        </>
    )
}

export default BroadDrawer