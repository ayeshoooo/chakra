import { Box, Container, Heading, Center, Flex, Image, Text } from '@chakra-ui/react'
import { data } from "../components/database"
import { RevealList, RevealWrapper } from 'next-reveal'
import { extendTheme } from '@chakra-ui/react'

export default function Instructors() {
    return (
        <Box >

<Container maxW={1400}>
    <Center>
        <Heading color='blue' my='20px'>Our Instructors</Heading>
    </Center>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true} >
        <Flex flexDir='column'  >
            {data.map((ins) => (
                <Box key={ins.id} marginBottom='100px' mt={{ md: '100px' }}>
                    <Center>
                        <Image borderRadius='full' width={90} height={90} src={ins.src} alt='' />
                    </Center>
                    <Heading textAlign='center' size='md'>{ins.heading}</Heading>
                    <Text  px='30px' fontSize='sm' textAlign='center' my='12px'>{ins.text}</Text>
                </Box>
            ))}
        </Flex>
    </RevealWrapper>
</Container>
</Box>
    )
            }
