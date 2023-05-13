import React from 'react';
import {
    Box,
} from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar';

type layoutProps = {
    children?: React.ReactNode;
}

export const BaseLayout: React.FC<layoutProps> = ({ children }) => {
    return (
        <>
        <NavBar />
        <Box
            pt='15'
            w="100vw"
            minH="100vh"
            as='main'
            backgroundSize='cover'
            backgroundRepeat='no-repeat'
            backgroundImage='url(https://i.imgur.com/KubWPyu.png)'

        >
            {children}
        </Box>
        </>
    );
};
