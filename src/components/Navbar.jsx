import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { Component, useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: 'background.default',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme}) => ({
    display: 'none',
    gap: "20px",
    alignItems: 'center',
    justifyContent: 'center',
    /* small or smaller then small */
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    gap: "10px",
    alignItems: 'center',
}))

const handleClose = () => {

}

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                    <Typography variant="h6" sx={{display: {
                        xs: 'none',
                        sm: 'block'
                    }}}>FaceBook</Typography>
                    <PetsIcon sx={{display: {
                        xs: 'block',
                        sm: 'none'
                    }}}/>
                    <Search startIcon={<SearchIcon />} ><InputBase placeholder='search...' /></Search>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                        <Badge badgeContent={4} color="error">
                            <Notifications />
                        </Badge>
                    </Icons>
                    <UserBox onClick={e=>setOpen(true)} >
                        <Avatar sx={{width: 30, height: 30}} src="https://picsum.photos/500" />
                        <Typography variant='span'>Daniel</Typography>
                    </UserBox>
            </StyledToolbar>

            { open && <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={true}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>}
        </AppBar>
    );
}
 
export default Navbar;