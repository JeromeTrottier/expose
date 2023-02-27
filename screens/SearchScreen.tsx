import { StyleSheet, View } from 'react-native'
import React from 'react'
import { InstantSearch } from 'react-instantsearch-native'
import SearchBox from '../components/search/SearchBox'
import InfiniteHits from '../components/search/InfiniteHits'
import algoliasearch from 'algoliasearch/lite';
import { SearchScreenProps } from '../types'
import Colors from '../constants/Colors'

const searchClient = algoliasearch('5SM9YKBLI0', 'abaac6e522d870ab882c2be207e23c1b');

const SearchScreen = ({navigation}: SearchScreenProps) => {
  return (
    <View style={styles.container}>
      <InstantSearch
          searchClient={searchClient}
          indexName={"users"}
      >
          <SearchBox />
          <InfiniteHits />
      </InstantSearch>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1
  }
})