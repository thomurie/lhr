import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import ContactUs from './ContactUs';

function PriceWrapper({ children, hide }) {
  const hidden = hide ? 'none' : '100';
  console.log(hidden);
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export default function CallToAction() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Reserve your spot today!
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Lots are filling up fast.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper hide={true}>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Phase One
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="900">
                27
              </Text>
              <Text fontSize="3xl" color="gray.500">
                lots
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <Heading color="gray.400">Sold out.</Heading>
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                display="inline-flex"
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.500'}
                isFullWidth
                disabled
              >
                Contact Us
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Current
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Phase Two
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  lots
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <ContactUs type="action" />
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Phase Three
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                lots
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <ContactUs type="action" />
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
