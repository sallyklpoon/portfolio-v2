import React from 'react';
import {
    Box
} from '@chakra-ui/react';

type layoutProps = {
    children?: React.ReactNode;
}

export const BaseLayout: React.FC<layoutProps> = ({ children }) => {
    return (
        <Box
            backgroundImage='url(https://i.imgur.com/KubWPyu.png)'
            minH="100vh"
            w="100%"
        >
            {children}
        </Box>
    );
};
