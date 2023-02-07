import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import PropTypes from "prop-types";
import { connectInfiniteHits } from "react-instantsearch-native";
import UserResult from "./UserResult";

const InfiniteHits = ({ hits, hasMore, refineNext }: any) => (
  <FlatList
    data={hits}
    keyExtractor={(item) => item.objectID}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    onEndReached={() => hasMore && refineNext()}
    renderItem={({ item }) => (
      <UserResult displayName={item.displayName} />
    )}
  />
);

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refineNext: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    separator: {
      borderBottomWidth: 1,
      borderColor: "#ccc"
    },
    item: {
      flexDirection: "column"
    },
    titleText: {
      color: "black",
      fontWeight: "bold"
    }
  });

export default connectInfiniteHits(InfiniteHits);
