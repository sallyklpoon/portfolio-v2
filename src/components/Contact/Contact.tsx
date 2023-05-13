import React from 'react';
import {
    Box,
    Text,
    Link,
    Stack,
    Center
} from '@chakra-ui/react';
import SectionHeader from '../layout/SectionHeader';

const Contact: React.FC = () => {

    return (
        <Box
            mt='5rem'
            w='100vw'
            h='100vh'
            bg='whiteAlpha.400'
        >
            <Box w='40vw'>
            <SectionHeader title="Let's Get In Touch" id='contact' />
            </Box>
            <Center>
                <Stack>
                    <Link href='mailto:sallyklpoon@gmail.com' textTransform='uppercase'>
                        <Text fontSize='6xl'>sallyklpoon@gmail.com</Text>
                    </Link>
                    <Link href='https://github.com/sallyklpoon' isExternal={true}>
                        <Text fontSize='6xl' textTransform='uppercase'>Github</Text>
                    </Link>
                    <Link href='https://www.linkedin.com/in/sallyklpoon/' isExternal={true}>
                        <Text fontSize='6xl' textTransform='uppercase'>LinkedIn</Text>
                    </Link>
                </Stack>
            </Center>

        </Box>
    );
};

export default Contact;
