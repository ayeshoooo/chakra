'use client'
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../../app/api/hello/components/Home'
import { cards, core } from '../../app/api/hello/components/database'

export default function page() {
  return (
    <>
      <Home title='Syllabus' src='https://rahmanee.com/wp-content/uploads/2019/04/bg.jpg' mr='800px' ml='800px'/>
      <Box mb='30px'pt='30px'mr='50px'>
        <Container maxW={1400} >
          <Center flexDir='column'>
            <Heading size='2xl' >Course Syllabus</Heading>
            <Text mt='20px' textAlign='center' >The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
          </Center>
          <Center flexDir='column' mt='20px'>
            <Heading >Common In All</Heading>
            <Text textAlign='center' >Every participant of the program will start by completing the following three core courses</Text>
          </Center>
          
          <Center >
            <Flex mt='30px' gap='20px' flexDirection='column' >
              {core.map((elem) => ( 
              <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px' key={elem.id} flex='40px'>
                <Heading>{elem.heading}</Heading>
                <Text pt='5px'>{elem.text}</Text>
              </Box>
              ))}
            </Flex>
          </Center>
        </Container>



        <Container maxW={1400} mt='30px' bgSize='cover' bgAttachment='fixed' alignItems='center'background='cover'bgImg='centre' bgImage='https://png.pngtree.com/background/20210715/original/pngtree-abstract-red-and-purple-galaxy-background-picture-image_1254686.jpg '>
          {cards.map((elem) => (
            <Box pt='40px' key={elem.id}  >
              <Center flexDir='column' mt='50px'>
                <Heading size='xl'color='gray'>{elem.heading1} </Heading>
                <Text fontWeight='medium' color='white' mt='20px' textAlign='center' >{elem.text1}</Text>
              </Center>
              <Center>
                <Flex mt='30px' gap='20px' flexDir='column'>
                  <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='300px'>
                    <Heading>{elem.heading2}</Heading>
                    <Text fontWeight='medium' pt='5px'>{elem.text2}</Text>
                  </Box>
                  <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='300px'>
                    <Heading>{elem.heading3}</Heading>
                    <Text fontWeight='medium' pt='5px'>{elem.text3}</Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}


        </Container>
      </Box>

    </>
  )
}
