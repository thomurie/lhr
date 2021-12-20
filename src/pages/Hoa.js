import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import CallToAction from '../components/CallToAction';
import BannerWText from '../components/BannerWText';

const HOADetails = [
  {
    id: 0,
    title: 'Lease out your home',
    text: 'We encourage leasing out your home (short-term or long-term, you pick)',
  },
  {
    id: 1,
    title: 'Pet Friendly',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  {
    id: 2,
    title: 'Driveway Snow Removal',
    text: 'Snow will be removed from driveways year-round',
  },
  {
    id: 3,
    title: 'Professionally Maintained Landscaping',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  {
    id: 4,
    title: 'Swimming Pool (End of Phase 1)',
    text: 'Take a refreshing swim to start your day, or enjoy the day lounging around the pool with family and friends.',
  },
  {
    id: 5,
    title: 'Pickelball Court (End of Phase 1)',
    text: 'Are you ready for a some pickleball in Pickleville? Game On!',
  },
  {
    id: 6,
    title: 'Street Snow Removal',
    text: 'Snow will also be removed from all roads year-round',
  },
];

const HOA = () => {
  return (
    <>
      <BannerWText
        title="Home Owners Association"
        subtext={'More Benefits, Less Rules'}
        img={'https://www.lighthouseretreatatbearlake.com/static/LHB/hoa.jpg'}
      />
      <Box p={4}>
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {HOADetails.map(feature => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
          <CallToAction />
        </Container>
      </Box>
    </>
  );
};

export default HOA;
