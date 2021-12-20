import {
  Box,
  chakra,
  Flex,
  Container,
  Link,
  Stack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link as RLink } from 'react-router-dom';
import { ReactNode } from 'react';
import ContactUs from './ContactUs';
import Logo from './Logo';
import EHO from '../assets/eho.jpg';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo />
        </Flex>
        <Stack direction={'row'} spacing={6}>
          <Link as={RLink} to="/">
            Home
          </Link>
          <Link as={RLink} to="/about">
            About
          </Link>
          <ContactUs type="footer" />
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>
            © {year} Lighthouse Retreat at Bear Lake. All rights reserved
          </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              rel="noreferrer noopener"
              target="_blank"
              label={'Instagram'}
              href={'https://www.hud.gov/fairhousing'}
            >
              <Image
                borderRadius=".5rem"
                backgroundColor={'white'}
                fit="scale-down"
                textAlign="center"
                boxSize="2rem"
                src={EHO}
                alt="Dan Abramov"
                mr="1"
              />
            </SocialButton>
            <SocialButton
              label={'Facebook'}
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.facebook.com/Lighthouse-Retreat-At-Bear-Lake-100952135266552"
            >
              <FaFacebook />
            </SocialButton>
            <SocialButton
              label={'Instagram'}
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.instagram.com/lighthouseretreatatbearlake/"
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
