import Service from './BaseService';

export default class ListingService extends Service {
  url = 'http://api.propertyguru.com/v1/listings?region=sg&locale=en&limit=20';

  fetchAllListings(page, callback) {
    this.get(this.url + `&page=${page}`, callback);
  }
}
