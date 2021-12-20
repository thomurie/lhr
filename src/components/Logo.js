import {
  Link,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import LHRLogo from '../assets/LighthouseBlackLogo.png';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const navigate = useNavigate();
  return (
    <>
      <Image
        borderRadius=".5rem"
        backgroundColor={'white'}
        fit="scale-down"
        textAlign="center"
        boxSize="2rem"
        src={LHRLogo}
        alt="Dan Abramov"
        mr="1"
        onClick={() => navigate('/')}
      />
      <Link
        as={RLink}
        to="/"
        display={useBreakpointValue({ base: 'none', lg: 'left' })}
        textAlign={useBreakpointValue({ base: 'center', lg: 'left' })}
        fontFamily={'heading'}
        color={useColorModeValue('gray.800', 'white')}
        _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}
      >
        Lighthouse Retreat At Bear Lake
      </Link>
    </>
  );
};

export default Logo;
