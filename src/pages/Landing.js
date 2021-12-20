import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const tempData =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting";
  return (
    <Container maxW={'7xl'}>
      <TextPhoto
        layout="row"
        name="The Newport"
        info={tempData}
        blob={true}
        img={
          'https://www.lighthouseretreatatbearlake.com/static/LHB/newport_elevation.png'
        }
        color="blue"
        href="/homes/newport"
      />
      <TextPhoto
        layout="row-reverse"
        name="The Northwood"
        info={tempData}
        blob={false}
        img={
          'https://www.lighthouseretreatatbearlake.com/static/LHB/northwood_elevation.png'
        }
        color="yellow"
        href="/homes/northwood"
      />
      <TextPhoto
        layout="row"
        name="The Cape Cod"
        info={tempData}
        blob={false}
        img={
          'https://www.lighthouseretreatatbearlake.com/static/LHB/cape_cod_elevation.png'
        }
        color="red"
        href="/homes/capecod"
      />
    </Container>
  );
};

// RED #B51F2F
// Yellow EAC435
// Dark Blue 345995
// Light Blue BEE5F5
function TextPhoto({ layout, name, info, blob, img, color, href }) {
  const navigate = useNavigate();
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column-reverse', md: `${layout}` }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
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
              bg: useColorModeValue(`${color}.200`, `${color}.400`),
              zIndex: -1,
            }}
          >
            {name}
          </Text>
        </Heading>
        <Text color={'gray.500'}>{info}</Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: 'column', sm: 'row' }}
        >
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={color}
            bg={`${color}.400`}
            _hover={{ bg: `${color}.500` }}
            onClick={() => navigate(href)}
          >
            More Details
          </Button>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}
      >
        <Blob
          display={blob ? '100' : 'none'}
          w={'150%'}
          h={'150%'}
          position={'absolute'}
          top={'-20%'}
          left={0}
          zIndex={-1}
          color={useColorModeValue(`${color}.50`, `${color}.400`)}
        />
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}
        >
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={img}
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon width={'100%'} viewBox="0 0 578 440" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Landing;
