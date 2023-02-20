import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import PropTypes from "prop-types";
import { connectSearchBox } from "react-instantsearch-native";
import { SearchBoxProps } from "react-instantsearch-dom";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 48,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "black",
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0
  }
});

const SearchBox = ({ currentRefinement, refine }: any) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={(value) => refine(value)}
      value={currentRefinement}
      placeholder="Rechercher une personne..."
    />
  </View>
);

SearchBox.propTypes = {
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired
};

export default connectSearchBox(SearchBox);
