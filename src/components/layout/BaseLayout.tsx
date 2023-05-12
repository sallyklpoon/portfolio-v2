import React from 'react';
import {
    Box,
    Container,
    Text
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
            pt='20'
            px='12'
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
