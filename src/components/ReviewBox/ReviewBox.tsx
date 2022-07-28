import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FaQuoteRight } from 'react-icons/fa';

const ReviewBox = () => {
  return (
    <>
      <Box backgroundColor='#f8f9fb' padding={30} borderRadius={5} maxW={350} boxShadow='sm'>
        <HStack>
          <Image />
          <Box>
            <Text fontSize={20}>Richard Joseph</Text>
            <Text fontSize={16}>Student</Text>
          </Box>
          <Flex flex={1} justifyContent='flex-end' alignItems='center'>
            <FaQuoteRight fontSize={40} opacity={0.3} />
          </Flex>
        </HStack>
        <VStack alignItems='flex-start' justifyContent='center'>
          <Text fontSize={20} color='#2467ec' fontWeight={900} lineHeight='24px'>Review Heading</Text>
          <Text textAlign='justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export { ReviewBox };
