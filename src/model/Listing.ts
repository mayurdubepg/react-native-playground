export declare type Listings = Listing[];

export declare type UListing = Listing | undefined;

export default interface Listing {
  id: string;
  statusCode: string;
  localizedTitle: string;
  localizedHeadline: string;
  localizedDescription: string;
  price: Price;
  media: Media;
}

interface Price {
  pretty: string;
}

interface Media {
  cover: Cover;
}

interface Cover {
  id: string;
  V150: string;
  V550: string;
}
