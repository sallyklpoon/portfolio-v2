import React from 'react';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Grid,
    HStack,
    Text
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import AccordionItemWrapper from '../layout/AccordionItemWrapper';

const AboutAccordion: React.FC = () => {
    return (
        <Accordion allowMultiple>
            <AccordionItemWrapper title='Technical Skills'>
                <HStack gap={3}>
                    <Text as='b' w='20%'>Languages</Text>
                    <Text>Python, Ruby, Java, Javascript, Typescript, SQL, HTML, CSS</Text>
                </HStack>
                <HStack gap={3}>
                    <Text as='b' w='20%'>Frameworks</Text>
                    <Text>React, Rails, NodeJS, Express, TailwindCSS, AWS, NextJS</Text>
                </HStack>
            </AccordionItemWrapper>


        </Accordion>
    );
};

export default AboutAccordion;
