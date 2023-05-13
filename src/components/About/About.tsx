import React from 'react';
import SectionHeader from '../layout/SectionHeader';
import {
    Box,
    Center,
    HStack,
    Text,
} from '@chakra-ui/react';
import SectionFooter from '../layout/SectionFooter';
import AboutAccordion from './AboutAccordion';

const About: React.FC = () => {
    return (
        <Box mx='20'>
            <SectionHeader title='About' id='about' />

            <Center>
                <HStack gap={20} justify='center' alignItems='flex-start'>
                    <Box w='20%'>
                        <Text fontSize='xl' mt='5rem'>
                            A developer with a knack for design and bringing people together.
                        </Text>
                    </Box>

                    <Box maxW='50%'>
                        <Text fontSize='3xl' mb={10}>
                            I'm currently a Software Engineer at Diligent.
                            With a major in Psychology, I enjoy putting the user first in projects and features I work on.
                            I'm equally as passionate about creating a positive community around me and growing as a developer.
                        </Text>

                        <AboutAccordion />
                    </Box>
                </HStack>
            </Center>

            <SectionFooter />
        </Box>
    );
};

export default About;