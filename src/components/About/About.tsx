import React from 'react';
import SectionHeader from '../layout/SectionHeader';
import {
    Box,
    Center,
    HStack,
    Text,
    Button,
    Link
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import SectionFooter from '../layout/SectionFooter';
import AboutAccordion from './AboutAccordion/AboutAccordion';

const About: React.FC = () => {
    return (
        <>

            <SectionHeader title='About' id='about' />

            <Box mx='20'>
                <Center>
                    <HStack gap={20} justify='center' alignItems='flex-start'>
                        <Box w='20%'>
                            <Text fontSize='xl' mt='5rem' mb={8}>
                                A developer with a knack for design and bringing people together.
                            </Text>
                            <Link
                                href='https://drive.google.com/file/d/1uVjfZrzJHcRDFU8fJV6Hc28t2TvG1ihO/view?usp=sharing'
                                isExternal={true}
                            >
                                <Button
                                    leftIcon={<DownloadIcon />}
                                    colorScheme='telegram'
                                    variant='outline'
                                    _hover={{
                                        backgroundColor: 'blue.200',
                                    }}
                                >
                                    Resume
                                </Button>
                            </Link>
                        </Box>

                        <Box maxW='50%'>
                            <Text fontSize='3xl' mb={10}>
                                As a Software Engineer,
                                I bring a unique perspective to my work thanks to my academic background in Psychology.
                                I believe in putting the user first in every project and feature I work on, ensuring that
                                the end product is both functional and intuitive. Beyond my technical skills, I am
                                passionate about fostering a positive community around me and continuously growing
                                as a developer.
                            </Text>

                            <AboutAccordion />
                        </Box>
                    </HStack>
                </Center>

                <SectionFooter />
            </Box>
        </>
    );
};

export default About;