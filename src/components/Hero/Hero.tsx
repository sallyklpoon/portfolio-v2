import React from 'react';
import {
    Grid,
    Text,
    Image,
    Center,
    GridItem,
    Heading,
    SlideFade,
    useMediaQuery,
    Stack
} from '@chakra-ui/react';

const Hero: React.FC = () => {
    const [isLargeScreen] = useMediaQuery('(min-width: 1000px)');

    return (
        <>
            {
                isLargeScreen ?
                    <SlideFade
                        in={true}
                        offsetY='20rem'
                    >
                        <Grid
                            m='10'
                            templateRows='1fr 1fr 2fr 1fr'
                            templateColumns='2fr 1fr 2fr'
                            templateAreas={`". . ."
                            "greeting greeting image"
                            ".        .        image"
                            ".        title    title"`}
                            gap={4}
                            h='75vh'
                        >

                            <GridItem pl='2' area={'greeting'}>
                                <Text fontSize={'6xl'}>
                                    Hello, I'm
                                </Text>
                                <Heading fontSize='6xl'>
                                    Sally!
                                </Heading>
                            </GridItem>

                            <GridItem pl='2' area={'image'}>

                                <Image
                                    mb={10}
                                    borderRadius='full'
                                    boxSize='20rem'
                                    fit='cover'
                                    src='https://i.imgur.com/HHjXqmi.jpg'
                                    alt='Sally Poon'
                                    _hover={{
                                        transform: 'scale(1.5)',
                                        transitionDuration: '0.2s',
                                        transitionTimingFunction: "ease-in-out"
                                    }}
                                />

                            </GridItem>

                            <GridItem pl='2' area={'title'}>
                                <Text fontSize='6xl'>
                                    I'm a Software Engineer based in Vancouver, BC.
                                </Text>
                            </GridItem>
                        </Grid>
                    </SlideFade> :
                    <>
                        <Center mt={20}>
                            <Stack align='center'>
                                <Image
                                    mb={5}
                                    borderRadius='full'
                                    boxSize='10rem'
                                    fit='cover'
                                    src='https://i.imgur.com/HHjXqmi.jpg'
                                    alt='Sally Poon'
                                    _hover={{
                                        transform: 'scale(1.5)',
                                        transitionDuration: '0.2s',
                                        transitionTimingFunction: "ease-in-out"
                                    }}
                                />
                                <Text fontSize='4xl'>
                                    Hello, I'm <b>Sally</b>!
                                </Text>
                                <Text fontSize='4xl' textAlign='center'>
                                    I'm a Software Engineer <br/> based in Vancouver, BC.
                                </Text>
                            </Stack>
                        </Center>
                    </>
            }
        </>

    )
};

export default Hero;