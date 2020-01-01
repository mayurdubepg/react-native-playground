import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Listing from '../model/Listing';

interface ListingItemProps {
  listing: Listing;
  onPress: (Listing: Listing) => void;
}

export default class ListingItem extends React.Component<ListingItemProps> {
  constructor(props: ListingItemProps) {
    super(props);
  }

  handlePress: any = (listing: Listing) => {
    this.props.onPress(listing);
  };

  render() {
    const {listing} = this.props;
    return (
      <TouchableOpacity style={styles.listingItem} onPress={this.handlePress}>
        <Image source={{uri: listing.media.cover.V150}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{listing.localizedTitle}</Text>
          <View style={styles.footer}>
            <Text style={styles.price}>{listing.price.pretty}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listingItem: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
    resizeMode: 'contain',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});
