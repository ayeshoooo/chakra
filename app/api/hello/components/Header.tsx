'use client'
import { Box, Button, Container, Flex, SimpleGrid,  Link,Image,Menu, MenuButton,MenuItem,MenuList,IconButton} from '@chakra-ui/react'
//import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons'

import png from '../../../../public/panaverse.png'

export default function Header() {
    return (
        <Box boxShadow='lg'>
            <Container maxW={1400}>
                <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}>
                    <Box ml='8px'>
                    <Image src='/logo5.webp' alt='panaverse-logo' h='70px' mt='12px' mx='15px'mr='250px'></Image>
                    </Box>
                    <Flex  display ={{lg:'flex',base:'none'}}placeItems='center' color='black' fontSize={18} fontWeight='semibold' gap={10} ml='60px'>
                       <Link href='/'>Home</Link>
                        <Link href='/syllabus'>Syllabus </Link>
                        <Link href='/explore'>Explore</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/contact'>Contact</Link>

                    </Flex>
                    <Box display={{lg:'initial',base:'none'}}>
                        <Button mt='16px' size='lg' colorScheme='teal' float='right'>Apply</Button>
                    </Box>
                    <Box pt='20px' display={{lg:'none',base:'initial'}}>
                    <Menu  >
                            <MenuButton float='right'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                               alignItems='centre'
                                
                            />
                             
                            <MenuList>
                                <MenuItem>
                              <Link href='/'>Home</Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/syllabus'>Syllabus</Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/explore'>Explore</Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/contact'>Contact</Link>
                                </MenuItem>
                                <MenuItem>
                                <Link href='/about'>About</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}