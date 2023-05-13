import React from 'react';
import {
    Center,
    Flex
} from '@chakra-ui/react';
import projectsOverviews from '../../config/data/projects.json'
import ProjectCard from './ProjectCard';
import SectionHeader from '../layout/SectionHeader';
import SectionFooter from '../layout/SectionFooter';

const Works: React.FC = () => {
    return (
        <>
            <SectionHeader title='Recent Projects' id='work' />

            <Center>
                <Flex
                    maxW='85%'
                    gap={6}
                    wrap='wrap'
                    alignItems='center'
                >
                    {
                        projectsOverviews.map((project) => {
                            return (
                                <ProjectCard project={project} />
                            )
                        })
                    }
                </Flex>
            </Center>

            <SectionFooter />
        </>
    );
};

export default Works;