import React from 'react';
import {
    Text,
    Flex,
    Spacer,
    HStack,
    Link
} from '@chakra-ui/react';

const NavBar: React.FC = () => {
    return (
        <Flex
            px={5}
            h='4rem'
            w="100%"
            alignItems='center'
            maxWidth='100vw'
            as="header"
            position="fixed"
            zIndex='200'
        >
            <Text fontSize='3xl' >Sally Poon</Text>

            <Spacer />

            <HStack spacing={3}>
                <Link href='#work'>
                    <Text fontSize='xl'>Work</Text>
                </Link>

                <Link>
                    <Text fontSize='xl'>About</Text>
                </Link>

                <Link>
                    <Text fontSize='xl'>Contact</Text>
                </Link>
            </HStack>

        </Flex>
    );
};

export default NavBar;