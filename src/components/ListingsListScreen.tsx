import Listing, {Listings} from '../model/Listing';
import * as React from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import ListingItem from './ListingItem';
import {AppRegistry} from 'react-native';
import UI from '../utils/UI';
import ListingService from '../services/ListingService';

interface ListingsListProps {
  deals: Listings;
}

export default class ListingsListScreen extends React.Component {
  state = {
    data: [],
    page: 1,
    loading: true,
    loadingMore: false,
    filtering: false,
    refreshing: false,
    error: null,
  };
  service = new ListingService();
  static navigationOptions = {
    title: 'Listings',
  };

  constructor(props: ListingsListProps) {
    super(props);
  }

  componentDidMount() {
    this.fetchListings();
  }
  fetchListings() {
    const {page} = this.state;
    this.service.fetchAllListings(page, (responsestatus, responsedata) => {
      if (responsestatus == 200) {
        this.setState((prevState, nextProps) => ({
          data:
            page === 1
              ? responsedata.listings
              : [...this.state.data, ...responsedata.listings],
          loading: false,
          loadingMore: false,
          refreshing: false,
        }));
      } else {
        this.setState({...this.state, loading: false});
      }
    });
  }

  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this.fetchListings();
      },
    );
  };

  _handleLoadMore = () => {
    console.log('in _handleLoadMore');
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true,
      }),
      () => {
        this.fetchListings();
      },
    );
  };

  _renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return (
      <View
        style={{
          position: 'relative',
          paddingVertical: 20,
          borderTopWidth: 1,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  onItemPress(listing: Listing) {
    UI.openURL('DASH', {});
  }

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          onRefresh={this._handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this._handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={20}
          ListFooterComponent={this._renderFooter}
          renderItem={({item}) => (
            <ListingItem listing={item} onPress={this.onItemPress} />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
  },
});

AppRegistry.registerComponent('ListApp', () => ListingsListScreen);
