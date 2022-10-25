import { IconButton, Stack } from '@mui/material'
import { Undo, Close } from "@mui/icons-material"
import React from 'react'

export function SnackActions(props) {
    return (
        <>
            <Stack direction="row">
                <IconButton color='default' aria-label='undo authentication' onClick={props.snkbrHandleUndo}>
                    <Undo />
                </IconButton>
                <IconButton color='error' aria-label='close notification' onClick={props.snkbrHandleClose}>
                    <Close />
                </IconButton>
            </Stack>
        </>
    )
}
