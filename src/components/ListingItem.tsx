import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import listing from '../model/Listing';

interface ListingItemProps {
  listing: Listing;
  onPress: any;
}

export default class ListingItem extends Component<ListingItemProps> {
  constructor(props: ListingItemProps) {
    super(props);
  }

  handlePress: any = () => {
    this.props.onPress(this.props.listing.id);
  };

  render() {
    const {listing} = this.props;
    console.log(listing.media.cover.V550);
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

/**
 * <TouchableOpacity style={styles.deal} onPress={this.handlePress}>
        <Image source={uri: listing.media.cover.v150} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{listing.localizedHeadLine}</Text>
          <View style={styles.footer}>
            // {deal.cause && <Text style={styles.cause}>{deal.cause.name}</Text>}
            <Text style={styles.price}>{listing.price.}</Text>
          </View>
        </View>
      </TouchableOpacity>
 */

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
