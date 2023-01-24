import React from 'react';
import {Pane, Heading} from 'evergreen-ui';

export default function Nav() {
    
    return(
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1}>
                <Heading size={500}>
                    Nam Bui
                </Heading>
            </Pane>
            <Pane>
                <a href="about">About Me</a>
                <a href="contact">Contact me</a>
            </Pane>
        </Pane>
    )
}