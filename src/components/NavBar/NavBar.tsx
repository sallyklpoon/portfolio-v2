import React from 'react';
import {
    Text,
    Flex,
    Spacer,
    HStack,
    Link,
    useMediaQuery
} from '@chakra-ui/react';

const NavBar: React.FC = () => {
    const [isLargeScreen] = useMediaQuery('(min-width: 1000px)');

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
            <Text fontSize={ isLargeScreen ? '3xl' : '2xl'} >Sally Poon</Text>

            <Spacer />

            <HStack spacing={3}>
                <Link href='#work'>
                    <Text fontSize={ isLargeScreen ? 'xl' : 'lg' }>Work</Text>
                </Link>

                <Link href='#about'>
                    <Text fontSize={ isLargeScreen ? 'xl' : 'lg' }>About</Text>
                </Link>

                <Link href='#contact'>
                    <Text fontSize={ isLargeScreen ? 'xl' : 'lg' }>Contact</Text>
                </Link>
            </HStack>

        </Flex>
    );
};

export default NavBar;