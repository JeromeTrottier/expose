import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { InstantSearch } from 'react-instantsearch-native'
import SearchBox from '../components/search/SearchBox'
import InfiniteHits from '../components/search/InfiniteHits'
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('5SM9YKBLI0', 'abaac6e522d870ab882c2be207e23c1b');

const SearchScreen = () => {
  return (
    <SafeAreaView>
        <InstantSearch
            searchClient={searchClient}
            indexName={"users"}
        >
            <SearchBox />
            <InfiniteHits />
        </InstantSearch>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})