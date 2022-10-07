import { Avatar, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import React, { Component, useState } from 'react';
import { Add as AddIcon, EmojiEmotions } from '@mui/icons-material'
import { Box, Stack } from '@mui/system';

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:  'center',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'text.primary',
    bgcolor: 'background.default',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
    borderRadius: 4
};

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: "10px"
})

function Add() {
    const [open, setOpen] = useState(false)

    return ( 
        <>
            <Tooltip title="Delete" sx={{position: "fixed", bottom: 20, left: {
                xs: "calc(50% - 25px)",
                md: 30
            }}}>
                <Fab onClick={e=>setOpen(true)} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <Modal
                open={open}
                onClose={e=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>

                <UserBox m={4}>
                    <Avatar>
                        <img src="https://picsum.photos/500"></img>
                    </Avatar>
                    <Typography component="span">
                        John Doe
                    </Typography>
                </UserBox>

                <TextField placeholder="What's on your mind?" />

                <Stack direction="row" gap={1} m={2}>
                        <EmojiEmotions color="success"/>
                        <EmojiEmotions color="error"/>
                        <EmojiEmotions color="info"/>
                        <EmojiEmotions color="warning"/>
                </Stack>
            </Box>
            </Modal>
        </>
     );
}
 
export default Add;