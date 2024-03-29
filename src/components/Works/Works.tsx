import React from 'react';
import {
    Center,
    Flex
} from '@chakra-ui/react';
import projectsOverviews from '../../config/data/projects.json'
import ProjectCard from './ProjectCard';
import SectionHeader from '../layout/SectionHeader';

const Works: React.FC = () => {
    return (
        <>
            <SectionHeader title='Recent Projects' id='work' />

            <Center>
                <Flex
                    maxW='85%'
                    gap={6}
                    wrap='wrap'
                    justifyContent='center'
                >
                    {
                        projectsOverviews.slice(0, 6).map((project) => {
                            return (
                                <ProjectCard project={project} />
                            )
                        })
                    }
                </Flex>
            </Center>
        </>
    );
};

export default Works;