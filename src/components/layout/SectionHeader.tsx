import React from 'react';
import {
    HStack,
    Text,
    Divider
} from '@chakra-ui/react';
import SectionFooter from './SectionFooter';


type SectionHeaderProps = {
    title: string;
    id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, id }) => {
    return (
        <>
            <SectionFooter id={id} />
            <HStack
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
        </>
    );
};

export default SectionHeader;