import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Text,
    Heading,
    Box,
    useMediaQuery
} from '@chakra-ui/react'
import { toast } from 'react-hot-toast';

type projectCardType = {
    project: projectOverviewType;
}

const ProjectCard: React.FC<projectCardType> = ({ project }) => {
    const [isLargeScreen] = useMediaQuery('(min-width: 1000px)');

    return (
        <Card
            h={ isLargeScreen ? 'sm' : 'xs' }
            w={ isLargeScreen ? 'sm' : 'xs' }
            backgroundColor='whiteAlpha.300'
            _hover={{
                cursor: project.link !== ''? 'pointer': 'not-allowed',
                transform: 'scale(1.05)',
                transitionDuration: '0.25s',
                transitionTimingFunction: 'ease-in-out'
            }}
            onClick={
                () => {
                    if (project.link !== '') {
                        window.open(project.link, '_blank');
                    } else {
                        toast.error('This project is unavailable to view!', { icon: '🙈'});
                    }
                }
            }
        >
            <CardHeader>
                <Heading size={ isLargeScreen ? 'md' : 'sm'} textTransform='uppercase'>
                    {project.name}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize='sm'>{project.description}</Text>

            </CardBody>

            <Box 
                h='50%'
                backgroundImage={project.image_url}
                backgroundSize='cover'
                
            />
        </Card>
    );
};

export default ProjectCard;
