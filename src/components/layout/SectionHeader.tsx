import React from 'react';
import {
    HStack,
    Text,
    Divider 
} from '@chakra-ui/react';


type SectionHeaderProps = {
    title: string;
    id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, id }) => {
    return (
        <HStack
            id={id}
            m='20'
        >
            <Text
                mr='5'
                fontSize='2xl'
                textTransform='uppercase'
            >
                {title}
            </Text>
            <Divider
                borderColor='black'
            />
        </HStack>
    );
};

export default SectionHeader;