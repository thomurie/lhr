import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import BannerWText from '../components/BannerWText';
import CallToAction from '../components/CallToAction';

const About = () => {
  const aboutData = [
    {
      name: ['Terry & ', 'Cindy King ', '-Partners'],
      info: 'Terry and Cindy are the dynamic duo of this venture! They have been working together as Licensed Real Estate brokers/agents at Crown King Real Estate LLC in Utah for over 30 years. However, their efforts were not limited to just selling real estate; for many of those years they have managed, sold, designed and helped build with Reliance Homes. When the owner of Reliance Homes retired in 2018 Terry and his sons, Michael and David, started TMD Construction LLC. Since then, they have designed, built, and sold multiple homes. Thanks to the foresight of Cindy’s Grandpa Ray Hansen, who purchased property at Bear Lake in the 1950’s, the King family has been vacationing and enjoying all that Bear Lake has to offer for years, including boating, jet skiing, swimming, riding the trails, and spending time with family. When the opportunity to be a part of Lighthouse Retreat at Bear Lake came up, the Kings could not have imagined a better way to share their love of Bear Lake and give back by helping other families have their own vacation retreat in the beautiful Bear Lake community.',
    },
    {
      name: ['Thom Urie', '-Partner'],
      info: 'Thom has worked in the residential homebuilding industry for more than 30 years. He has held various positions with some of the largest public and private homebuilders and residential land developers in the country including Director and Vice President level positions with Newland Communities (a master-plan land developer) Hovnanian Enterprises, DR Horton, David Weekley Homes, and Shea Homes. Mr. Urie was also the Utah Division President for Lafferty Communities. Mr. Urie has a bachelor degree in finance and a law degree. He is also a licensed real estate agent and has his B100 Utah general contractors license (inactive). Mr. Urie loves spending time with his family outdoors. He and his family love to travel the backroads of Utah. He also enjoys spending time at the property that his 2nd great grandfather homesteaded on Cedar Mountain in Southern Utah. He also takes every opportunity he gets to spend time on his mountain bike.',
    },
    {
      name: ['David King', '–Partner'],
      info: 'David is an experienced homebuilder, striving to produce top quality homes in a timely manner. His friendly and easy manner lend themselves to cultivating great relationships with the subcontractors and the individual workers who work on the homes, inspiring them to do their best work. Adding to that, Mr. King holds a B100 Utah general contractors license, and is a licensed building inspector. This creates a winning combination of homebuilding knowledge and the attention to detail needed to produce quality homes at a reasonable price. Mr. King loves his work, but also loves to spend time with his family. As a former competitive swimmer, he really enjoys spending time in or around the water, boating, jet skiing, and of course, swimming.',
    },
  ];
  return (
    <>
      <BannerWText
        title="About Us"
        subtext={'Lorem Ipsum'}
        img={
          'https://www.lighthouseretreatatbearlake.com/static/LHB/aboutus.jpg'
        }
      />

      <Container maxW={'6xl'} mt={10}>
        <Flex
          alignItems="start"
          justifyContent="space-between"
          justify={'flex-start'}
          direction="column"
        >
          {aboutData.map(a => (
            <SectionBox title={a.name} content={a.info} />
          ))}
        </Flex>
        <CallToAction />
      </Container>
    </>
  );
};

export default About;

const SectionBox = ({ title, content }) => {
  return (
    <Box>
      <Flex direction={{ base: 'column', lg: 'row' }}>
        {title.map(t => (
          <SectionTitle title={t} />
        ))}
      </Flex>
      <Text fontSize={'xl'} mb="4">
        {content}
      </Text>
    </Box>
  );
};

const SectionTitle = ({ title }) => {
  return (
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
        {title}
      </Text>
    </Heading>
  );
};
