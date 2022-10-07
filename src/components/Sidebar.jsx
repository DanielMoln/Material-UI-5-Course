import { AccountCircle, Drafts, Group, Inbox, Man, Pages, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React, { Component } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';

class Sidebar extends Component {
    state = {  } 
    render() { 
        return (
            <Box flex={2} p={2} sx={{display: {xs: 'none',sm: 'block'}}}>
                <Box position="fixed">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#home">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Homepage" />
                            </ListItemButton>
                        </ListItem>
                        
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#pages">
                                <ListItemIcon>
                                    <Pages />
                                </ListItemIcon>
                                <ListItemText primary="Pages" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#groups">
                                <ListItemIcon>
                                    <Group />
                                </ListItemIcon>
                                <ListItemText primary="Groups" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#marketplace">
                                <ListItemIcon>
                                    <Storefront />
                                </ListItemIcon>
                                <ListItemText primary="Marketplace" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#marketplace">
                                <ListItemIcon>
                                    <Man />
                                </ListItemIcon>
                                <ListItemText primary="Friends" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#settings">
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#settings">
                                <ListItemIcon>
                                    <AccountCircle />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DarkModeIcon />
                                </ListItemIcon>
                                <Switch onChange={e=>this.props.setMode(this.props.mode === 'light' ? "dark" : "light")} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        );
    }
}
 
export default Sidebar;