import React, { Fragment } from 'react'

import {List,ListItem,ListItemText,ListItemIcon,Divider } from '@material-ui/core'
import {MoveToInbox, Mail, } from '@material-ui/icons'

const Drawer = () => {

    return (
        <div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail/>}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail/>}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Drawer