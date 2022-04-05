import React, { useState } from 'react';
import { HStack, VStack, Box, Image, Text } from '@chakra-ui/react';

export interface SearchItemProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const SearchItem = ({ imageUrl, title, subtitle }: SearchItemProps) => {
  return (
    <Box backgroundColor="blue.100" width={350} p={5} m={5} borderRadius={10}>
      <HStack>
        <Box height={100}>
          <Image src={imageUrl} height={100} />
        </Box>
        <VStack>
          <Text fontSize={16}>{title}</Text>
          <Text fontSize={11}>{subtitle}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
