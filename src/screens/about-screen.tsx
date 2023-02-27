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
import { AntDesign, Ionicons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
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
      <Animatable.View animation="zoomIn">
        <MastHead
          title="About this app"
          image={require('../assets/masthead-3.png')}
        >
          <NavBar />
        </MastHead>
      </Animatable.View>

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
              borderRadius="25"
              resizeMode="cover"
              w={140}
              h={140}
              alt="author"
              mb="5"
            />
            <Text fontSize="md" w="full">
              Hi! My name is Sarmad and this is a React Native task managing
              application I built using Expo, NativeBase, Reanimated, Moti, and
              various other libraries & frameworks. {'\n'}
              {'\n'}If you're interested in this project, the source code can be
              found on the Github Repository linked below!
            </Text>
            <LinkButton
              colorScheme="purple"
              size="lg"
              w="full"
              borderRadius="10"
              mt="10"
              href="https://github.com/ahsarmad/TaskManager"
              leftIcon={
                <Icon
                  as={AntDesign}
                  name="github"
                  size="lg"
                  opacity={0.8}
                  mr="2"
                />
              }
            >
              Take me to the Repo
            </LinkButton>
          </Box>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}
export default AboutScreen
