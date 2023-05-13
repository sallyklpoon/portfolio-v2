import React from 'react';
import {
    Accordion,
    HStack,
    Text
} from '@chakra-ui/react';
import AccordionItemWrapper from '../../layout/AccordionItemWrapper';
import AccordionDetailItem from './AccordionDetailItem';

const AboutAccordion: React.FC = () => {
    return (
        <Accordion allowMultiple>
            <AccordionItemWrapper title='Technical Skills'>
                <HStack gap={3} mb={4}>
                    <Text as='b' w='25%'>Languages</Text>
                    <Text>Python, Ruby, Java, Javascript, Typescript, SQL, HTML, CSS</Text>
                </HStack>
                <HStack gap={3} mb={4}>
                    <Text as='b' w='25%'>Framework</Text>
                    <Text>React, Rails, NodeJS, Express, TailwindCSS, AWS, NextJS</Text>
                </HStack>
                <HStack gap={3} mb={4}>
                    <Text as='b' w='25%'>Processes</Text>
                    <Text>Git, JIRA, Confluence, Agile, Kanban, Scrum</Text>
                </HStack>
            </AccordionItemWrapper>

            <AccordionItemWrapper title='Work Experience'>
                <Text as='b'>Software Engineer</Text>
                <Text fontSize='sm'>Jan 2022 - Sep2022 <br /> Jun 2023 - Sep2023</Text>
                <Text mb={4}>Diligent Corporation - Internship</Text>

                <AccordionDetailItem
                    title='Full Stack Developer'
                    date='Jan 2023-May 2023'
                    description='YVR International Airport - Practicum'
                />
            </AccordionItemWrapper>


            <AccordionItemWrapper title='Community'>
                <AccordionDetailItem
                    title='Chair for the Downtown Campus'
                    date='June 2022-May 2023'
                    description='BCIT Student Association'
                />
                <AccordionDetailItem
                    title='Co-President'
                    date='Jan 2021-May 2022'
                    description='Computing Club (BCIT)'
                />
                <AccordionDetailItem
                    title='Treasurer and Communications Director'
                    date='Jan 2022-May 2022'
                    description='Women in Computing (BCIT)'
                />
                <AccordionDetailItem
                    title='Crisis Line Responder & Group Leader'
                    date='Sep 2018 - May 2022'
                    description='CHIMO Community Services'
                />
            </AccordionItemWrapper>

            <AccordionItemWrapper title='Recognition'>
                <AccordionDetailItem
                    title='BCIT Alumni Association Award'
                    date='Dec 2022'
                    description='British Columbia Institute of Technology Scholarships and Awards'
                />
                <AccordionDetailItem
                    title='3rd place - SAP Invitational Hackathon'
                    date='Sep 2022'
                    description='SAP'
                />
                <AccordionDetailItem
                    title='1st place - Diligent Vancouver HackFest'
                    date='July 2022'
                    description='Diligent Corporation'
                />
                <AccordionDetailItem
                    title='Distinguished Set Rep Award'
                    date='May 2022'
                    description='BCIT Student Association'
                />
            </AccordionItemWrapper>
        </Accordion>
    );
};

export default AboutAccordion;
