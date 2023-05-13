import React from 'react';
import {
    Box,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

type accordionItemWrapperType = {
    title: string;
    children: React.ReactNode;
}

const AccordionItemWrapper: React.FC<accordionItemWrapperType> = ({ title, children }) => {
    return (
        <AccordionItem>
        {({ isExpanded }) => (
            <>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            {title}
                        </Box>
                        {isExpanded ? (
                            <MinusIcon fontSize='12px' />
                        ) : (
                            <AddIcon fontSize='12px' />
                        )}
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {children}
                </AccordionPanel>
            </>
        )}
    </AccordionItem>
    );
};

export default AccordionItemWrapper;
