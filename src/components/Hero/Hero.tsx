import React from 'react';
import {
    Grid,
    Text,
    Image,
    Flex,
    GridItem,
    Heading,
    SlideFade
} from '@chakra-ui/react';

const Hero: React.FC = () => {

    const isLargeScreen = window.matchMedia("(min-width: 600px)").matches;

    return (
        <SlideFade
            in={true}
            offsetY='20rem'
        >
            <Grid
                templateRows='1fr 1fr 2fr 1fr'
                templateColumns='2fr 1fr 2fr'
                templateAreas={`". . ."
                            "greeting . image"
                            ". . image"
                            ". title title"`}
                gap={4}
                h='75vh'
                w='100%'
                px='20'
            >

                <GridItem pl='2' area={'greeting'}>
                    <Text fontSize={'6xl'}>
                        HELLO, MY NAME IS
                    </Text>
                    <Heading fontSize='6xl'>
                        SALLY! 👋
                    </Heading>
                </GridItem>

                <GridItem pl='2' area={'image'}>
                    <Flex align='center' justify='center'>
                        <Image
                            mb={10}
                            borderRadius='full'
                            boxSize='20rem'
                            fit='cover'
                            src='https://i.imgur.com/HHjXqmi.jpg'
                            alt='Sally Poon'
                            _hover={{
                                transform: 'scale(2.0)',
                                transitionDuration: '0.2s',
                                transitionTimingFunction: "ease-in-out"
                            }}
                        />
                    </Flex>
                </GridItem>

                <GridItem pl='2' area={'title'}>
                    <Text fontSize={'6xl'}>
                        I'm a Software Developer based in Vancouver, BC.
                    </Text>
                </GridItem>

            </Grid>
        </SlideFade>
    )
};

export default Hero;