import { ExpandMore, ExpandMoreOutlined, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
import React, { Component } from 'react';
import Post from './Post';

class Feed extends Component {
    state = {  } 
    render() { 
        return (
            <Box flex={8} p={2}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </Box>
        );
    }
}
 
export default Feed;