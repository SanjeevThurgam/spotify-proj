import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, VStack } from '@chakra-ui/react';
import { SearchItem, SearchItemProps } from './SearchItem';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (searchText !== '') {
        // TODO: Phase 2: Make the Search API call to our node backend
        // NOT the actual spotify API
        // the node backend will call the spotify API
      }
    };

    fetchData();
  }, [searchText]);

  return (
    <VStack>
      <Input
        variant="filled"
        placeholder="Search for a song"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          // TODO: Phase 2: Update searchText state
        }}
      />
      {searchResults && !loading ? (
        <>
          {searchResults.map((trackInfo, index) => (
            <SearchItem key={index} {...trackInfo} />
          ))}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </VStack>
  );
};

export default Search;
