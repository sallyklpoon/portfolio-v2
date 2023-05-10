import React from 'react';
import {
    Grid,
    Text,
    Image,
    HStack,
    GridItem
} from '@chakra-ui/react';

const Hero: React.FC = () => {

    return (
        <Grid
            templateRows='1fr 2fr 1fr'
            templateColumns='2fr 1fr 2fr'
            templateAreas={`"greeting . ."
                            ". . image"
                            ". title title"`}
            gap={4}
            h='100vh'
            w='100%'
        >
            <GridItem pl='2' bg='orange.300' area={'greeting'}>
                Greeting
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'image'}>
                Image
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'title'}>
                Title
            </GridItem>

            {/* 
                <Text
                    fontSize='6xl'
                >
                    Hello, my name is Sally!
                </Text>
                <Image
                    borderRadius='full'
                    boxSize='100px'
                    fit='cover'
                    src='https://i.imgur.com/HHjXqmi.jpg'
                    alt='Sally Poon'
                    _hover={{
                        transform: 'scale(5.0)',
                        transitionDuration: '0.2s',
                        transitionTimingFunction: "ease-in-out"
                    }}
                />


            <Text fontSize={'6xl'}>

                I'm a Software Developer based in Vancouver, BC.
            </Text> */}

        </Grid>
    )
};

export default Hero;