import {
  Container,
  Heading,
  Text,
  Flex,
  Stack,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

function BannerWText({ title, subtext, img }) {
  return (
    <Flex
      w={'full'}
      h={'50vh'}
      backgroundImage={`url(${img})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Stack
            spacing={4}
            as={Container}
            maxW={'3xl'}
            textAlign={'center'}
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
          >
            <Heading fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              {title}
            </Heading>
            <Text fontSize={'xl'}>{subtext}</Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default BannerWText;
