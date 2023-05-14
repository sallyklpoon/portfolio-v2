import React from 'react';
import { Text, useMediaQuery } from '@chakra-ui/react';

type accordionDetailItemtype = {
    title: string;
    date: string;
    description: string;
}

const AccordionDetailItem: React.FC<accordionDetailItemtype> = ({ title, date, description }) => {
    const [isLargeScreen] = useMediaQuery('(min-width: 1000px)');

    return (
        <>
            <Text as='b' fontSize={ isLargeScreen ? 'md' : 'sm'}>{title}</Text>
            <Text fontSize='sm'>{date}</Text>
            <Text mb={3} fontSize={ isLargeScreen ? 'md' : 'sm'}>{description}</Text>
        </>
    );
};

export default AccordionDetailItem;
