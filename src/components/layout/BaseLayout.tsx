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
            p='5'
            w="100vw"
            minH="100vh"
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            backgroundImage='url(https://i.imgur.com/KubWPyu.png)'

        >
            {children}
        </Box>
    );
};
