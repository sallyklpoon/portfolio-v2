import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Heading
} from '@chakra-ui/react'

type projectCardType = {
    project: projectOverviewType;
}

const ProjectCard: React.FC<projectCardType> = ({ project }) => {
    return (
        <Card
            h='xs'
            w='sm'
            backgroundColor='whiteAlpha.300'
            _hover={{
                transform: 'scale(1.1)',
                transitionDuration: '0.2s',
                transitionTimingFunction: "ease-in-out"
            }}
        >
            <CardHeader>
                <Heading size='md' textTransform='uppercase'>
                    {project.name}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize='sm'>{project.description}</Text>
            </CardBody>
        </Card>
    );
};

export default ProjectCard;
