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
                        <Center mt='20'>
                            <Stack align='center'>
                                <Text mb={10} fontSize={'6xl'} as='b'>
                                    Hello, I'm Sally
                                </Text>

                                <Image
                                    pl='2'
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

                                <Text fontSize='6xl' align='center' as='abbr'>
                                    software engineer <br/>
                                </Text>
                                <Text fontSize='3xl' as='abbr'>based in vancouver, bc</Text>
                            </Stack>
                        </Center>
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