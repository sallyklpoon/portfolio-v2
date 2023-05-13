import React from 'react';
import {
    Box,
    Center,
    Grid,
    Text,
    Divider,
    HStack
} from '@chakra-ui/react';
import projectsOverviews from '../../config/data/projects.json'
import ProjectCard from './ProjectCard';
import SectionHeader from '../SectionHeader';

const Works: React.FC = () => {
    return (
        <Box>
            <SectionHeader title='Recent Projects' id='work' />

            <Center>

                <Grid
                    gap={6}
                    gridTemplateColumns='repeat(3, 1fr)'
                >
                    {
                        projectsOverviews.map((project) => {
                            return (
                                <ProjectCard project={project} />
                            )
                        })
                    }
                </Grid>
            </Center>
        </Box>

    );
};

export default Works;