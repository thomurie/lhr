import {
  Box,
  Container,
  Heading,
  AspectRatio,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Location = () => {
  return (
    <>
      <Box p={4}>
        <Container maxW={'6xl'} mt={5}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            mb="4"
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: useColorModeValue(`blue.200`, `blue.400`),
                zIndex: -1,
              }}
            >
              Address
            </Text>
          </Heading>
          <Text fontSize={'xl'} mb="4">
            2250-2189 S. Beachcomber Ln, Garden City, UT 84028
          </Text>
          <AspectRatio ratio={16 / 9} maxH={'80vh'}>
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5938.750061698004!2d-111.389844!3d41.906296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x710649bc003ad32d!2sLighthouse%20Retreat%20at%20Bear%20Lake!5e0!3m2!1sen!2sus!4v1639759140727!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </AspectRatio>
        </Container>
      </Box>
    </>
  );
};

export default Location;
