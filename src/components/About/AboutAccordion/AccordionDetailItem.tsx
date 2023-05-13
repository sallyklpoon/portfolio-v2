import React from 'react';
import { Text } from '@chakra-ui/react';

type accordionDetailItemtype = {
    title: string;
    date: string;
    description: string;
}

const AccordionDetailItem: React.FC<accordionDetailItemtype> = ({ title, date, description }) => {
    return (
        <>
            <Text as='b'>{title}</Text>
            <Text fontSize='sm'>{date}</Text>
            <Text mb={3}>{description}</Text>
        </>
    );
};

export default AccordionDetailItem;
