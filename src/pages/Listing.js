import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import capecodInfo from '../assets/capecod_info.json';
import newportInfo from '../assets/newport_info.json';
import northwoodInfo from '../assets/northwood_info.json';

const Listing = () => {
  let { home_id } = useParams();
  const [listingInfo, setListingInfo] = useState(newportInfo);

  useEffect(() => {
    if (home_id === 'newport') setListingInfo(newportInfo);
    if (home_id === 'capecod') setListingInfo(capecodInfo);
    if (home_id === 'northwood') setListingInfo(northwoodInfo);
  }, [home_id]);

  console.log(listingInfo, home_id);

  return (
    <>
      <Container maxW="container.xl">
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
            {listingInfo.name}
          </Text>
        </Heading>
        <ListingPhotos photos={listingInfo.images} />
        <Text mb="4">{listingInfo.info}</Text>
        <Statistics statArray={listingInfo.details} />
        <CallToAction />
      </Container>
    </>
  );
};

export default Listing;

function StatsCard({ title, stat }) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      bgGradient="linear(to-br, blue.200, blue.400)"
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

function Statistics({ statArray }) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacing={{ base: 5, lg: 8 }}
      mb="4"
    >
      {statArray.map(s => (
        <StatsCard title={s.title} stat={s.stat} />
      ))}
    </SimpleGrid>
  );
}

function ListingPhotos({ photos }) {
  const handleDragStart = e => e.preventDefault();

  const items = photos.map(p => (
    <img src={p} onDragStart={handleDragStart} role="presentation" />
  ));
  return (
    <Container centerContent>
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
      />
    </Container>
  );
}
