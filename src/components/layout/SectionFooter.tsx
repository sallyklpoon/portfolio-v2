import React from 'react';
import { Box } from '@chakra-ui/react';

type sectionFooterProps = {
    id?: string;
}

const SectionFooter: React.FC<sectionFooterProps> = ({ id }) => {
    return <Box id={id} h='5rem'/>;
};

export default SectionFooter;
