import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import MastHead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <MastHead
        title="About this app"
        image={require('../assets/masthead-3.png')}
      >
        <NavBar />
      </MastHead>
      <ScrollView
        flex={1}
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/profile-pic.png')}
              borderRadius="full"
              resizeMode="cover"
              w={150}
              h={150}
              alt="author"
            />
            <Text fontSize="md" w="full">
              This is a React Native task managing application built using Expo,
              NativeBase, Reanimated, Moti, and various other libraries/
              frameworks. The source code can be found on my Github linked
              below!
            </Text>
            <LinkButton colorScheme="blue" size="lg" borderRadius="full">
              Take me to the Repository
            </LinkButton>
          </Box>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}
export default AboutScreen
