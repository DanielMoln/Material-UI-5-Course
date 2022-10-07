import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { Component } from 'react';

class Rightbar extends Component {
    state = { 
        photos: [
            {
                img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                title: 'Breakfast',
            },
            {
                img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                title: 'Burger',
            },
            {
                img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                title: 'Camera',
            },
            {
                img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                title: 'Coffee',
            },
            {
                img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                title: 'Hats',
            },
            {
                img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                title: 'Honey',
            },
            {
                img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                title: 'Basketball',
            },
            {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                title: 'Fern',
            },
            {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                title: 'Mushrooms',
            },
            {
                img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                title: 'Tomato basil',
            },
            {
                img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                title: 'Sea star',
            },
            {
                img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                title: 'Bike',
            }
        ]
     } 
    render() { 
        return (
            <Box flex={2} p={2} sx={{display: {xs: 'none',sm: 'block'}}}>
                <Box position="fixed" width={300}>
                    <Typography variant="h6" fontWeight={100} mt={2}>
                        Online Friends
                    </Typography>

                    <AvatarGroup max={4}>
                        <Avatar alt="Remy Sharp" src="https://picsum.photos/400" />
                        <Avatar alt="Travis Howard" src="https://picsum.photos/300" />
                        <Avatar alt="Cindy Baker" src="https://picsum.photos/500" />
                        <Avatar alt="Agnes Walker" src="https://picsum.photos/230" />
                        <Avatar alt="Trevor Henderson" src="https://picsum.photos/600" />
                    </AvatarGroup>

                    <Typography variant="h6" fontWeight={100}>
                        Latest Photos
                    </Typography>

                    <ImageList cols={3} rowHeight={164} gap={5}>
                        {
                            this.state.photos.map(photo => {
                                return <ImageListItem key={photo.img}>
                                    <img 
                                        src={`${photo.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${photo.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={photo.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            })
                        }
                    </ImageList>

                    <Typography variant="h6" fontWeight={100}>
                        Latest Conversations
                    </Typography>

                    <List sx={{ bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        );
    }
}
 
export default Rightbar;