import React from 'react';
import SectionHeader from '../layout/SectionHeader';
import {
    Box,
    Center,
    HStack,
    Text,
} from '@chakra-ui/react';
import SectionFooter from '../layout/SectionFooter';
import AboutAccordion from './AboutAccordion/AboutAccordion';

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
                        As a Software Engineer at Diligent, 
                        I bring a unique perspective to my work thanks to my academic background in Psychology. 
                        I believe in putting the user first in every project and feature I work on, ensuring that 
                        the end product is both functional and intuitive. Beyond my technical skills, I am equally 
                        passionate about fostering a positive community in the workplace and continuously growing 
                        as a developer.
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