export declare type Listings = Listing[];

export declare type UListing = Listing | undefined;

export default interface Listing {
  id: string;
  statusCode: string;
  localizedTitle: string;
  localizedHeadline: string;
  localizedDescription: string;
  price: Price | null;
  media: Media | null;
}

interface Price {
  pretty: string;
}

interface Media {
  cover: Cover | null;
}

interface Cover {
  id: string | null;
  V150: string | null;
  V550: string | null;
}
